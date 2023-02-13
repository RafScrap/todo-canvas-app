import {
    Col,
    RectSkeleton,
    Row
} from "@salutejs/plasma-ui";
import React, {useEffect, useState} from "react";
import {useRecoilValue, useSetRecoilState} from 'recoil'
import {from} from 'linq-to-typescript'
import {PhraseEntity} from "../Entities";
import {PhraseQuestion, PhraseReply} from "./Phrase";
import {getDialogByTopicAndId} from "../../../RecoilStorage";

export type DialogueProps = {
    topic: string,
    id: number
}

//ToDo: удалить когда будет готов бэк.
const dialog = {
    phrases: [
        {
            question: "Alex!", reply: "What? We ____ be at home in five hours.",
            answers: ["are", "won't", "will"], answerIndex: 2
        },
        {
            question: "But our airplane pilot was killed two hours ago.", reply: "____ we be at home?",
            answers: ["Will", "Won’t", "Don't"], answerIndex: 1
        },
        {
            question: "Yes, but I have tickets to Moscow.", reply: "____ we be in Moscow in five hours?",
            answers: ["Do", "Will", "Don't"], answerIndex: 1
        },
        {
            question: "Yes, but there are bears in Russia.", reply: "...We ____ be in Moscow.",
            answers: ["won't", "will", "are"], answerIndex: 0
        },
    ]
}

export const Dialogue = ({topic, id}: DialogueProps) => {

    const [state, setState] = useState({
        loaded: false
    });
    const dialoguesState = useRecoilValue(getDialogByTopicAndId({id, topic}))
    const setDialogueState = useSetRecoilState(getDialogByTopicAndId({id, topic}));

    useEffect(() => {
        if (!state.loaded)
            fetch('')
                .then()
                .finally(() => {
                    setState({
                        ...state,
                        loaded: true
                    })
                    setDialogueState({
                        topic: topic,
                        id: id,
                        phrases: dialog.phrases.map(p =>
                            ({
                                question: p.question,
                                reply: p.reply,
                                answers: {
                                    answers: p.answers,
                                    answerIndex: p.answerIndex,
                                    selected: undefined,
                                }
                            } as PhraseEntity))
                    })
                })
    })

    let showPhrasesCount = from(dialoguesState?.phrases ?? []).count(x => x.answers.selected !== undefined) + 1;

    return (
        <>
            {state.loaded ?
                dialoguesState?.phrases.slice(0, showPhrasesCount).map((p, index) => (
                    <Row>
                        <Col sizeS={3} sizeM={5} sizeL={6} sizeXL={9}>
                            <PhraseQuestion topic={topic} dialogueId={id} index={index}/>
                        </Col>
                        <Col sizeS={1} sizeM={1} sizeL={2} sizeXL={3}>

                        </Col>
                        <Col sizeS={1} sizeM={1} sizeL={2} sizeXL={3}>

                        </Col>
                        <Col sizeS={3} sizeM={5} sizeL={6} sizeXL={9}>
                            <PhraseReply topic={topic} dialogueId={id} index={index}/>
                        </Col>


                    </Row>
                ))
                :
                <RectSkeleton height={"100%"} width={"100%"}/>
            }


        </>
    )
}

