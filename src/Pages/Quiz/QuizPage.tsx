import React, {useState} from "react"
import {Tabs, TabsController} from "@salutejs/plasma-ui";
import {Dialogue} from "./Dialogue/Dialogue";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useParams} from "react-router";
import {Theory} from "./Theory";

type QuizPageState = {
    activePage : number
    totalTasks :  number
}

export const QuizPage = () => {

    const navigate = useNavigate();

    let params = useParams();
    let [_, setQuery] = useSearchParams();
    let topicId = params.id!;

    const [state, setState] = useState({
        activePage: 0,
        totalTasks: 5,
    } as QuizPageState)

    let items = [{label: "Теория"}].concat(Array.from(Array(10).keys()).map(i => ({label: `Диалог ${i + 1}`})));

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
                        <div hidden={state.activePage - 1 != index}>
                            <Dialogue topic={topicId} id={index}></Dialogue>
                        </div>

                    ))}



                </div>



            <div style={{zIndex: 0, position: 'relative'}}>
                <TabsController items={items} index={state.activePage} onIndexChange={(i) => setState({...state, activePage: i})} autoscroll/>
            </div>

        </>
    )
}
