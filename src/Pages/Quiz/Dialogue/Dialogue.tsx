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


export const Dialogue = ({topic, id}: DialogueProps) => {

    const [state, setState] = useState({

    });
    const dialoguesState = useRecoilValue(getDialogByTopicAndId({id, topic}))
    const setDialogueState = useSetRecoilState(getDialogByTopicAndId({id, topic}));

    let showPhrasesCount = from(dialoguesState?.phrases ?? []).count(x => x.answers.selected !== undefined) + 1;

    return (
        <>
            {
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
            }


        </>
    )
}

