import React, {useState} from "react";
import {Button, Card, CardBody, CardContent, TextBoxRoot, TextL} from "@salutejs/plasma-ui";
import {Answer, Test} from "./Entities";

export type QuizInstanceProps = {
    test: Test,
    onChosen: (state: "right" | "wrong") => void
}

export const QuizInstance = ({test, onChosen} : QuizInstanceProps) => {

    const [state, setState] = useState({
        //answers: test.variants.map((_, index) => ({ state: "none", id: index} as Answer))
        answers: [] as Answer[]
    })

    return (
        <>
            <Card style={{ marginRight: "0"}} tabIndex={0} outlined scaleOnFocus>
                <CardBody>
                    <CardContent>
                        <TextBoxRoot style={{
                            margin: '5px',
                            marginBottom: '15px'
                        }}>
                            <TextL>{test.q}</TextL>
                            <TextL>{test.a}</TextL>
                        </TextBoxRoot>
                        {
                            test.variants.map((v, i) => (
                                <Button style={{
                                    margin: '5px',
                                }}
                                        view={(() => {
                                            switch (state.answers.filter(a => a.id === i)[0]?.state) {
                                                case "wrong":
                                                    return 'critical'
                                                case "right":
                                                    return 'primary'
                                                default:
                                                    return 'secondary'
                                            }

                                        })()}
                                        onClick={(event) => {
                                            let newAnswers = state.answers;
                                            newAnswers.push({id: i, state: i === test.correct ? "right" : "wrong"} as Answer)
                                            setState({...state, answers: newAnswers});
                                            if(newAnswers.length === 1)
                                                onChosen(newAnswers[0].state)

                                        }}
                                >{`${i + 1}. ${v}`}</Button>
                            ))
                        }

                    </CardContent>
                </CardBody>
            </Card>
        </>
    )
}