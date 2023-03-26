import React, {memo, useEffect, useRef, useState} from "react";
import {createSmartappDebugger, createAssistant, AssistantAppState} from "@salutejs/client";
import {Container} from '@salutejs/plasma-ui/components/Grid';
import "./App.css";
import {Card, Header, TabItem, Tabs, TextL} from "@salutejs/plasma-ui";
import {Route, Routes} from "react-router-dom";
import {ChooseTopicPage} from "./Pages/ChooseTopic/ChooseTopicPage";
import {Theory} from "./Pages/Quiz/Theory";
import {QuizPage} from "./Pages/Quiz/QuizPage";
import {QuizResultsPage} from "./Pages/QuizResults/QuizResultsPage";
import {initializeAssistant} from "./Assistant/Assistant";
import {ChooseTopicPageAssistant} from "./Assistant/ChooseTopicPageAssistant";
import {QuizPageAssistant} from "./Assistant/QuizPageAssistant";
import {useNavigate, useParams} from 'react-router'
import {Helmet} from 'react-helmet'


let test = [
    {
        "q": "Alex!",
        "a": "What? We ____ be at home in five hours.",
        "variants": [
            "are",
            "won't",
            "will"
        ],
        "correct": 2
    },
];

const test0 = [
    {
        q: "Hello! Do you want to go to France?", a: "Yes, I ____ to do it!",
        variants: ["want", "wants", "wanted"], correct: 0
    },
    {
        q: "Fine! Do you have questions?", a: "Um... I am sorry, but we _____ have a car!",
        variants: ["aren't", "doesn't", "don't"], correct: 2
    },
    {
        q: "...Stop! Do you know Joan?", a: "Yes, but she _____ have a car.",
        variants: ["isn't", "doesn't", "don't"], correct: 1
    },
    {
        q: "But she has money.", a: "..._____ she have much money?",
        variants: ["Do", "Is", "Does"], r: 2
    },
    {
        q: "Very much", a: null,
        variants: [null, null, null], correct: null
    }
];

const test1 = [
    {
        q: "Alex!", a: "What? We ____ be at home in five hours.",
        variants: ["are", "won't", "will"], correct: 2
    },
    {
        q: "But our airplane pilot was killed two hours ago.", a: "____ we be at home?",
        variants: ["Will", "Won’t", "Don't"], correct: 1
    },
    {
        q: "Yes, but I have tickets to Moscow.", a: "____ we be in Moscow in five hours?",
        variants: ["Do", "Will", "Don't"], correct: 1
    },
    {
        q: "Yes, but there are bears in Russia.", a: "...We ____ be in Moscow.",
        variants: ["won't", "will", "are"], correct: 0
    }
];

const test2 = [
    {
        q: "I was in New York two years ago!", a: "Oh, I ____ in this city two years ago!",
        variants: ["am", "live", "lived"], correct: 2
    },
    {
        q: "And in Washington?", a: "No, I ____ live in Washington at that time!",
        variants: ["did", "didn’t", "do"], correct: 1
    },
    {
        q: "Oh, I was in Washington five years ago.", a: "____ you live in Washington five years ago?",
        variants: ["Do", "Did", "Didn't"], correct: 1
    },
    {
        q: "Yes, but I could live in Moscow.", a: "Why ____ you choose Moscow?",
        variants: ["aren't", "did", "didn't"], correct: 2
    },
    {
        q: "Because bears live in Russia.", a: "...",
        variants: [null, null, null], correct: null
    }
]

const topics = ["1. Present Simple", "2. Future Simple", "3. Past Simple", "4. Defining relative clauses", "3. Past Simple", "3. Past Simple", "3. Past Simple", "3. Past Simple"];
const theme_ans = [{id: 0, title: "один"}, {id: 1, title: "два"}, {id: 2, title: "три"}];
const theory = ["Present Simple - настоящее (простое) время. Употребляется для постоянных, регулярных действий. Примеры:",
    "Future Simple", "Past Simple", "", ""];


const userName = "Alex";

export const App = memo(() => {
    const navigate = useNavigate();

    return (
        <>
            <Container style={{
                minHeight: '100vh'
            }}>
                <Header title={``} back={true} onBackClick={() => {
                    if (window.location.pathname !== '/')
                        navigate(-1)
                }}>
                </Header>
                <Routes>
                    <Route path="/" element={
                        <ChooseTopicPageAssistant>
                            <ChooseTopicPage/>
                        </ChooseTopicPageAssistant>
                    }/>

                    <Route path="/topic/:id" element={
                        <QuizPageAssistant>
                            <QuizPage/>
                        </QuizPageAssistant>
                    }/>
                </Routes>
            </Container>
        </>
    )
})

// export class Old_App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: [],
//       topic: 0,
//       num: -1
//     }
//     // this.assistant = initializeAssistant(() => this.getStateForAssistant() );
//     // this.assistant.on("data", (event) => {
//     //   console.log(`assistant.on(data)`, event);
//     //   const { action } = event
//     //   this.dispatchAssistantAction(action);
//     // });
//     // this.assistant.on("start", (event) => {
//     //   console.log(`assistant.on(start)`, event);
//     // });
//     test = JSON.parse(JSON.stringify(test0));
//     this.handleClick_Answer = this.handleClick_Answer.bind(this);
//   }
//
//   getStateForAssistant () {
//     const state = {
//       item_selector: {
//         items: theme_ans.map(
//           ({ id, title }, index) => ({
//             number: index + 1,
//             id,
//             title,
//           })
//         ),
//       },
//     };
//     return state;
//   }
//
//   dispatchAssistantAction (action) {
//     if (action) {
//       switch (action.type) {
//         case 'add_note':
//           return this.add_note(action);
//   // сменить тему
//         case 'done_note':
//           return this.done_note(action);
//   // выбрать ответ
//         case 'choose_answer':
//           return this.choose_answer(action);
//         default:
//           throw new Error();
//       }
//     }
//   }
//   // добавить вопрос
//   add_note (action) {
//     if (this.state.num < test.length - 1) this.setState({
//       id: Math.random().toString(36).substring(7),
//       a: test[this.state.num + 1].a,
//       visB0: null,
//       visB1: null,
//       visB2: null,
//       num: this.state.num + 1,
//     });
//   }
//   // сменить тему (по кнопке)
//   done_note (action) {
//     this.handleClick_Topic(action.id);
//   }
//   // выбрать ответ (по голосу)
//   choose_answer (action) {
//     this.handleClick_Answer(action.id);
//   }
//   //выбрать ответ (в целом)
//   handleClick_Answer(i) {
//     const num = this.state.num;
//     if (test[num].correct === i) {
//       //var aIs = )
//       this.setState({a: test[num].a.replace(/_*_/, test[num].variants[i])})
//       console.log(this.state.topic);
//     };
//     if (i === 0) this.setState({visB0: "hidden"});
//     if (i === 1) this.setState({visB1: "hidden"});
//     if (i === 2) this.setState({visB2: "hidden"});
//   }
//   // сменить тему (по кнопке и по голосу)
//   handleClick_Topic(i) {
//     this.setState({
//         topic: i,
//         id: null,
//         num: -1,
//     });
//     if (i === 0) test = JSON.parse(JSON.stringify(test0));
//     if (i === 1) test = JSON.parse(JSON.stringify(test1));
//     if (i === 2) test = JSON.parse(JSON.stringify(test2));
//   }
//
// }