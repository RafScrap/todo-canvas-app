import React, {useEffect, useState} from "react"
import {Tabs, TabsController} from "@salutejs/plasma-ui";
import {Dialogue} from "./Dialogue/Dialogue";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useParams} from "react-router";
import {Theory} from "./Theory";
import {Answer, AnswersRow, DialogueState, PhraseEntity} from "./Entities";
import {useRecoilState} from "recoil";
import {dialoguesStateAtom} from "../../RecoilStorage";
import {from} from "linq-to-typescript";

type QuizPageState = {
    activePage: number
    totalTasks: number
}

export const QuizPage = () => {
    let params = useParams();
    let topicId = params.id!;

    const [state, setState] = useState({
        activePage: 0,
        totalTasks: 0,
    } as QuizPageState)

    const [dialogues, setDialogues] = useRecoilState(dialoguesStateAtom);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/RafScrap/todo-canvas-app/main/data/${topicId}/tasks.json`)
            .then(async (resp) => {
                let tasks = (await resp.json() as any[]).map((e, index) => ({
                    topic: topicId,
                    id: index,
                    phrases: (e['phrases'].map(p => ({
                        question: p.question,
                        reply: p.reply,
                        answers: {answers: p.answers, answerIndex: p.answerIndex} as AnswersRow
                    } as PhraseEntity))) as PhraseEntity[]
                } as DialogueState))
                setDialogues(dialogues.filter(d => d.topic !== topicId).concat(tasks))
                setState({
                    ...state,
                    totalTasks: tasks.length
                })
            })
    })

    let items = [{label: "Теория"}].concat(Array.from(Array(state.totalTasks).keys()).map(i => ({label: `Диалог ${i + 1}`})));

    return (
        <>

            <div style={{
                overflowY: "scroll",
                overflowX: "hidden",
                height: "80vh",
            }}>

                <div hidden={state.activePage !== 0}>
                    <Theory></Theory>
                </div>

                {items.map((item, index) => (
                    <div hidden={state.activePage - 1 !== index}>
                        <Dialogue topic={topicId} id={index}></Dialogue>
                    </div>

                ))}

            </div>


            <div style={{zIndex: 0, position: 'relative'}}>
                <TabsController items={items} index={state.activePage}
                                onIndexChange={(i) => setState({...state, activePage: i})} autoscroll/>
            </div>

        </>
    )
}
