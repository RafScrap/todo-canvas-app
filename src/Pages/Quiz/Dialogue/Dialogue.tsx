import {Button, Card, CardContent, Cell, Col, Image, Row, TextBoxBigTitle, TextL} from "@salutejs/plasma-ui";
import React, {useState} from "react";

export type DialogueProps = {
    topic: string,
    id: number
}

export type PhraseEntity = {
    question: string,
    reply: string,
    answers: string[],
    answerIndex: number
}

export type DialogEntity = {
    phrases: PhraseEntity[]
}

type DialogueState = {
    position: number
}

export const Dialogue = ({topic, id}: DialogueProps) => {

    const [state, setState] = useState({
        position: 0
    } as DialogueState);

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
    } as DialogEntity

    return (
        <>
            {dialog.phrases.slice(0, state.position + 1).map((p, index) => (
                <Row>
                    <Col sizeS={3} sizeM={5} sizeL={6} sizeXL={9}>
                        <PhraseQuestion phrase={p} index={index}/>
                    </Col>
                    <Col sizeS={1} sizeM={1} sizeL={2} sizeXL={3}>

                    </Col>
                    <Col sizeS={1} sizeM={1} sizeL={2} sizeXL={3}>

                    </Col>
                    <Col sizeS={3} sizeM={5} sizeL={6} sizeXL={9}>
                        <PhraseReply index={index} phrase={p} stateChanger={setState}/>
                    </Col>


                </Row>
            ))}
        </>
    )
}

enum PhraseType {
    Question,
    Reply
}

const Phrase = ({
                    phrase,
                    type,
                    index,
                    style = undefined,
                    stateChanger = undefined,
                }: { phrase: PhraseEntity, type: PhraseType, index : number, style?: React.CSSProperties, stateChanger?: React.Dispatch<React.SetStateAction<DialogueState>> }) => {

    let text: string;
    let imageUrl: string;
    switch (type) {
        case PhraseType.Reply:
            text = phrase.reply;
            imageUrl = 'https://i.pinimg.com/736x/1e/8c/29/1e8c29946564bd4e3f1c7e005e94f4e3.jpg'
            break;
        case PhraseType.Question:
            text = phrase.question;
            imageUrl = `https://www.nastroy.net/pic/images/201907/139477-1564501214.jpg`
            break;
    }


    const image = (<Image src={imageUrl}
                          width="50px"
                          height="50px"
                          style={{
                              marginRight: "15px",
                              borderRadius: "50%"
                          }}/>)


    return (
        <>
            <div style={style}>
                <Card style={{
                    margin: "10px",
                }}>
                    <CardContent>
                        <Cell
                            contentLeft={type === PhraseType.Question ? image : ""}
                            content={<TextL>{text}</TextL>}
                            contentRight={type === PhraseType.Reply ? image : ""}
                        />
                        {type === PhraseType.Reply ? (
                            <div>
                                {phrase.answers.map((value) => (
                                        <Button style={{
                                            marginRight: "10px"
                                        }}
                                                text={value}
                                                onClick={() => {
                                                    if(stateChanger !== undefined)
                                                        stateChanger({position: index + 1} as DialogueState);
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


const PhraseQuestion = ({phrase, index}: { phrase: PhraseEntity, index : number}) => {

    return (
        <Phrase phrase={phrase} index={index} type={PhraseType.Question}/>
    )
}

const PhraseReply = ({phrase, index, stateChanger}: { phrase: PhraseEntity, index : number, stateChanger: React.Dispatch<React.SetStateAction<DialogueState>> }) => {

    return (
        <Phrase style={{}}  index={index} phrase={phrase} type={PhraseType.Reply} stateChanger={stateChanger}/>
    )
}