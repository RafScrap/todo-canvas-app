import React, {useEffect, useState} from "react"
import {Tabs, TabsController} from "@salutejs/plasma-ui";
import {Dialogue} from "./Dialogue/Dialogue";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useParams} from "react-router";
import {Theory} from "./Theory";
import {Answer, AnswersRow, DialogueState, PhraseEntity} from "./Entities";
import {useRecoilState} from "recoil";
import {dialoguesStateAtom, quizPageStateAtom} from "../../RecoilStorage";
import {from} from "linq-to-typescript";
import {assistant} from "../../Assistant/Assistant";

type QuizPageState = {
    totalTasks: number
    loaded: boolean
}

export const QuizPage = () => {
    let params = useParams();
    let topicId = params.id!;

    const [dialogues, setDialogues] = useRecoilState(dialoguesStateAtom);

    const [state, setState] = useState({

        totalTasks: from(dialogues).count(x=> x.topic==topicId),
        loaded: false,
    } as QuizPageState)

    const [pageState, setPageState] = useState({
        activePage: 0
    })


    useEffect(() => {
        if(!state.loaded && from(dialogues).count(x=> x.topic==topicId) === 0)
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
                    totalTasks: tasks.length,
                    loaded: true
                })
            })


    })

    useEffect(() => {
        assistant.on("data", (event : any) => {
            console.log(`assistant.on(data)`, event);
            if(event)
            {
                try{
                    // @ts-ignore
                    let action = event["action"];
                    switch (event.type)
                    {
                        case 'smart_app_data':
                            switch (action.type)
                            {
                                case "set_quiz_page":
                                    setPageState({...pageState, activePage: action.id})
                                    break;
                                default:
                                    break;
                            }
                            break;
                    }
                } catch (e) {
                    console.error(e);
                }
            }
        });
    }, []);

    let items = [{label: "Теория"}].concat(Array.from(Array(state.totalTasks).keys()).map(i => ({label: `Диалог ${i + 1}`})));

    return (
        <>

            <div style={{
                overflowY: "scroll",
                overflowX: "hidden",
                height: "80vh",
            }}>

                <div hidden={pageState.activePage !== 0}>
                    <Theory></Theory>
                </div>

                {items.map((item, index) => (
                    <div hidden={pageState.activePage - 1 !== index}>
                        <Dialogue topic={topicId} id={index}></Dialogue>
                    </div>

                ))}

            </div>


            <div style={{zIndex: 0, position: 'relative'}}>
                <TabsController items={items} index={pageState.activePage}
                                onIndexChange={(i) => setPageState({...pageState, activePage: i})} autoscroll/>
            </div>

        </>
    )
}
