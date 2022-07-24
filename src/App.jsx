import React from "react";
import { createSmartappDebugger, createAssistant} from "@sberdevices/assistant-client";
import "./App.css";
import { TaskItem } from "./TaskItem";

let test = [];
const test0 = [
  {q: "Hello! Do you want to go to France?", 
  aIsNot: "Yes, I ____ to do it!", aIs: "Yes, I want to do it!", v0: "want", v1: "wants", v2:"wanted", r: 0},
  {q: "Fine! Do you have questions?",
  aIsNot:"Um... I am sorry, but we _____ have a car!", aIs: "Um... I am sorry, but we don't have a car!",
  v0: "aren't", v1: "doesn't", v2: "don't", r: 2},
  {q: "...Stop! Do you know Joan?", aIsNot: "Yes, but she _____ have a car.",
  aIs: "Yes, but she doesn't have a car.", v0: "isn't", v1: "doesn't", v2: "don't", r: 1},
  {q: "But she has money.", aIsNot: "..._____ she have much money?",
  aIs: "...Does she have much money?", v0: "Do", v1: "Is", v2: "Does", r: 2},
  {q: "Very much", aIsNot: null, aIs: null, v0: null, v1: null, v2: null, r :null}
];

const test1 = [
  {q: "Alex!", aIsNot: "What? We ____ be at home in five hours.",
  aIs: "What? We will be at home in five hours.", v0: "are", v1: "won't", v2: "will", r: 2},
  {q: "But our airplane pilot was killed two hours ago.",
  aIsNot: "____ we be at home?", aIs: "Won’t we be at home?", v0: "Will", v1: "Won’t", v2: "Don't", r: 1},
  {q: "Yes, but I have tickets to Moscow.", aIsNot: "____ we be in Moscow in five hours?",
  aIs: "Will we be in Moscow in five hours?", v0: "Do", v1: "Will", v2: "Don't", r: 1},
  {q: "Yes, but there are bears in Russia.", aIsNot: "...We ____ be in Moscow.",
  aIs: "...We won’t be in Moscow.", v0: "won't", v1: "will", v2: "are", r: 0}
];

const test2 = [
  {q: "I was in New York two years ago!", aIsNot: "Oh, I ____ in this city two years ago!",
  aIs:"Oh, I lived in this city two years ago!", v0:"am", v1:"live", v2:"lived", r: 2},
  {q: "And in Washington?", aIsNot: "No, I ____ live in Washington at that time!",
  aIs: "No, I didn’t live in Washington at that time!", v0: "did", v1: "didn’t", v2: "do", r: 1},
  {q: "Oh, I was in Washington five years ago.",
  aIsNot: "____ you live in Washington five years ago?",
  aIs: "Did you live in Washington five years ago?", v0: "Do", v1: "Did", v2: "Didn't", r: 1},
  {q: "Yes, but I could live in Moscow.", aIsNot: "Why ____ you choose Moscow?",
  aIs: "Why didn't you choose Moscow?", v1: "aren't", v2: "did", v3: "didn't", r: 2},
  {q: "Because bears live in Russia.", aIsNot:"...", aIs:"...", v0: null, v1: null, v2: null, r: null}
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
    this.setState({      
      id: Math.random().toString(36).substring(7),
      a: test[this.state.num + 1].aIsNot, 
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
    if (test[num].r === i) {
      this.setState({a: test[num].aIs})
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
          {num >= 0 && num < test.length? <TaskItem onClick={this.handleClick_Answer} q={test[this.state.num].q} a={this.state.a}
          v0={test[this.state.num].v0} v1={test[this.state.num].v1} v2={test[this.state.num].v2}
          visB0={this.state.visB0} visB1={this.state.visB1} visB2={this.state.visB2} /> : ""}
        </section>  
      </main>   
    )
  }
}