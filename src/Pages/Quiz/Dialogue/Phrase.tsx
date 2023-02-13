import React from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {getPhraseByTopicIdIndex} from "../../../RecoilStorage";
import {Button, Card, CardContent, Cell, Image, TextL} from "@salutejs/plasma-ui";

enum PhraseType {
    Question,
    Reply
}

type PhraseProps = {
    topic : string,
    dialogueId: number,
    index: number,
    type? : PhraseType,
    style?: React.CSSProperties
}

export const Phrase = ({
                           topic,
                           dialogueId,
                           index,
                           type,
                           style = undefined,
                       }: PhraseProps) => {

    const phraseState = useRecoilValue(getPhraseByTopicIdIndex({topic: topic, id: dialogueId, index: index}))
    const setPhraseState = useSetRecoilState(getPhraseByTopicIdIndex({topic: topic, id: dialogueId, index: index}));

    let text: string;
    let imageUrl: string;
    switch (type) {
        case PhraseType.Reply:
            text = phraseState.reply;
            imageUrl = 'https://i.pinimg.com/736x/1e/8c/29/1e8c29946564bd4e3f1c7e005e94f4e3.jpg'
            break;
        case PhraseType.Question:
            text = phraseState.question;
            imageUrl = `https://www.nastroy.net/pic/images/201907/139477-1564501214.jpg`
            break;

    }



    const image = (<Image src={imageUrl!}
                          width="50px"
                          height="50px"
                          style={{
                              marginRight: "15px",
                              borderRadius: "50%"
                          }}/>)

    let chosenButtonColor : "success" | "critical";
    if(phraseState.answers.selected !== undefined)
    {
        if(phraseState.answers.selected[0] === phraseState.answers.answerIndex)
            chosenButtonColor = "success";
        else
            chosenButtonColor = "critical"
    }


    return (
        <>
            <div style={style}>
                <Card style={{
                    margin: "10px",
                }}>
                    <CardContent>
                        <Cell
                            contentLeft={type === PhraseType.Question ? image : ""}
                            content={<TextL>{text!}</TextL>}
                            contentRight={type === PhraseType.Reply ? image : ""}
                        />
                        {type === PhraseType.Reply ? (
                            <div>
                                {phraseState.answers.answers.map((value, index) => (
                                        <Button style={{
                                            marginRight: "10px"
                                        }}
                                                view={phraseState.answers.selected === undefined ? "secondary" : (phraseState.answers.selected[0] === index ? chosenButtonColor : "secondary") }

                                                text={value}
                                                disabled={phraseState.answers.selected !== undefined}
                                                onClick={() => {
                                                    setPhraseState({...phraseState,
                                                        answers: {
                                                            ...phraseState.answers,
                                                            selected: [index]
                                                        }})
                                                }}
                                        />
                                    )
                                )}
                            </div>) : ""}


                    </CardContent>
                </Card>
            </div>
        </>
    )
}


export const PhraseQuestion = ({topic, dialogueId, index}: PhraseProps) => {

    return (
        <Phrase topic={topic} dialogueId={dialogueId} index={index} type={PhraseType.Question}/>
    )
}

export const PhraseReply = ({topic, dialogueId, index}: PhraseProps) => {

    return (
        <Phrase topic={topic} dialogueId={dialogueId} index={index}  type={PhraseType.Reply} />
    )
}