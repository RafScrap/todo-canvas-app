import React from "react";
import { createSmartappDebugger, createAssistant} from "@sberdevices/assistant-client";
import "./App.css";
import { TaskItem } from "./TaskItem";
import { PastTaskItems } from "./PastTaskItems";

let test = [];

const test0 = [
  {q: "Hello! Do you want to go to France?", a: "Yes, I ____ to do it!", 
  variants: ["want", "wants", "wanted"], correct: 0},
  {q: "Fine! Do you have questions?", a:"Um... I am sorry, but we _____ have a car!",
  variants: ["aren't", "doesn't", "don't"], correct: 2},
  {q: "...Stop! Do you know Joan?", a: "Yes, but she _____ have a car.",
  variants: ["isn't", "doesn't", "don't"], correct: 1},
  {q: "But she has money.", a: "..._____ she have much money?",
  variants: ["Do", "Is", "Does"], r: 2},
  {q: "Very much", a: null, 
  variants: [null, null, null], correct: null}
];

const test1 = [
  {q: "Alex!", a: "What? We ____ be at home in five hours.",
  variants: ["are", "won't", "will"], correct: 2},
  {q: "But our airplane pilot was killed two hours ago.", a: "____ we be at home?",
  variants: ["Will", "Won’t", "Don't"], correct: 1},
  {q: "Yes, but I have tickets to Moscow.", a: "____ we be in Moscow in five hours?",
  variants: ["Do", "Will", "Don't"], correct: 1},
  {q: "Yes, but there are bears in Russia.", a: "...We ____ be in Moscow.",
  variants: ["won't", "will", "are"], correct: 0}
];

const test2 = [
  {q: "I was in New York two years ago!", a: "Oh, I ____ in this city two years ago!",
  variants: ["am", "live", "lived"], correct: 2},
  {q: "And in Washington?", a: "No, I ____ live in Washington at that time!",
  variants: ["did", "didn’t", "do"], correct: 1},
  {q: "Oh, I was in Washington five years ago.", a: "____ you live in Washington five years ago?",
  variants: ["Do", "Did", "Didn't"], correct: 1},
  {q: "Yes, but I could live in Moscow.", a: "Why ____ you choose Moscow?",
  variants: ["aren't", "did", "didn't"], correct: 2},
  {q: "Because bears live in Russia.", a: "...", 
  variants: [null, null, null], correct: null}
]

const topics = ["1. Present Simple","2. Future Simple","3. Past Simple"];
const theme_ans = [{id: 0, title: "один"}, {id: 1, title: "два"}, {id: 2, title: "три"}];
const theory = ["Present Simple - настоящее (простое) время. Употребляется для постоянных, регулярных действий. Примеры:",
"Future Simple", "Past Simple", "",""];

const userName = "Alex";
//Функция запуска смартапа
const initializeAssistant = (getState/*: any*/) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
    });
  }
  return createAssistant({ getState });
};
 
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [], 
      topic: 0,
      num: -1
    }
    this.assistant = initializeAssistant(() => this.getStateForAssistant() );
    this.assistant.on("data", (event) => {
      console.log(`assistant.on(data)`, event);
      const { action } = event
      this.dispatchAssistantAction(action);
    });
    this.assistant.on("start", (event) => {
      console.log(`assistant.on(start)`, event);
    });
    test = JSON.parse(JSON.stringify(test0));
    this.handleClick_Answer = this.handleClick_Answer.bind(this);
  }

  getStateForAssistant () {
    const state = {
      item_selector: {
        items: theme_ans.map(
          ({ id, title }, index) => ({
            number: index + 1,
            id,
            title,
          })
        ),
      },
    };
    return state;
  }

  dispatchAssistantAction (action) {
    if (action) {
      switch (action.type) {
        case 'add_note':
          return this.add_note(action);
  // сменить тему
        case 'done_note':
          return this.done_note(action);
  // выбрать ответ
        case 'choose_answer':
          return this.choose_answer(action);
        default:
          throw new Error();
      }
    }
  }
  // добавить вопрос
  add_note (action) {
    if (this.state.num < test.length - 1) this.setState({      
      id: Math.random().toString(36).substring(7),
      a: test[this.state.num + 1].a, 
      visB0: null,
      visB1: null,
      visB2: null,
      num: this.state.num + 1,
    });
  }
  // сменить тему (по кнопке)
  done_note (action) {
    this.handleClick_Topic(action.id);
  }
  // выбрать ответ (по голосу)
  choose_answer (action) {
    this.handleClick_Answer(action.id);
  }
  //выбрать ответ (в целом)
  handleClick_Answer(i) {
    const num = this.state.num;
    if (test[num].correct === i) {
      //var aIs = )
      this.setState({a: test[num].a.replace(/_*_/, test[num].variants[i])})
      console.log(this.state.topic);
    };
    if (i === 0) this.setState({visB0: "hidden"});
    if (i === 1) this.setState({visB1: "hidden"});
    if (i === 2) this.setState({visB2: "hidden"});
  }
  // сменить тему (по кнопке и по голосу) 
  handleClick_Topic(i) {
    this.setState({
        topic: i,
        id: null,
        num: -1,
    });
    if (i === 0) test = JSON.parse(JSON.stringify(test0));
    if (i === 1) test = JSON.parse(JSON.stringify(test1));
    if (i === 2) test = JSON.parse(JSON.stringify(test2));
  }
  render() {
    const num = this.state.num;
    return (  
      <main className = "container">
        <header className = "App-header">
          <p>Hello, {userName} </p>
        </header>
        <section className = "App-section"> 
          <div className = "topic">
              <p><button className = "button_topic" onClick={() => this.handleClick_Topic(0)}> {topics[0]} </button></p>
              <p><button className = "button_topic" onClick={() => this.handleClick_Topic(1)}> {topics[1]} </button></p>
              <p><button className = "button_topic" onClick={() => this.handleClick_Topic(2)}> {topics[2]} </button></p>
          </div>
          <div className = "theory">
              <p> {theory[this.state.topic]} </p>
          </div>
          <div className = "tasks">
            {num > 0? <PastTaskItems q={test[num - 1].q} a={test[num - 1].a.replace('_*_', test[num].variants[test[num].correct])} num={num}/> : ""}
            {num >= 0 && num < test.length? <TaskItem onClick={this.handleClick_Answer} q={test[num].q} a={this.state.a}
            v0={test[num].variants[0]} v1={test[num].variants[1]} v2={test[num].variants[2]}
            visB0={this.state.visB0} visB1={this.state.visB1} visB2={this.state.visB2} /> : ""}
          </div>
        </section>  
      </main>   
    )
  }
}