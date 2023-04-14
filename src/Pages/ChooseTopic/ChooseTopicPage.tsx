import {Col, RectSkeleton, Row} from "@salutejs/plasma-ui";
import React, {useEffect, useState} from "react";
import {Topic} from "./Topic";
import {PhraseEntity} from "../Quiz/Entities";
import {AssistantPageProps} from "../../Assistant/Assistant";

type Topic = {
    topic: string,
    id: string
}

export const ChooseTopicPage = () => {

    const [state, setState] = useState({
        loaded: false,
        topics: [] as Topic[]
    });
    useEffect(() => {
        if (!state.loaded)
            fetch('https://raw.githubusercontent.com/RafScrap/todo-canvas-app/main/data/themes.json')
                .then(async (data) => {
                    const themes = (await data.json()) as Topic[]
                    setState({
                        ...state,
                        topics: themes,
                        loaded: true
                    })
                })
    }, [state])

    return (
        <>
            <Row>
                {state.loaded ? state.topics.map((topic) => (
                    <Col sizeS={4} sizeM={3} sizeL={4} sizeXL={3}>
                        <Topic name={topic.topic} id={topic.id}/>
                    </Col>
                )) :
                    <RectSkeleton width={"100%"} height={"300px"}/>
                }
            </Row>
        </>
    )

}