import {useParams} from "react-router";
import React, {useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardContent,
    Carousel,
    CarouselCol,
    CarouselGridWrapper,
    H1, PaginationDot, PaginationDots,
    TextBoxRoot, TextL
} from "@salutejs/plasma-ui";

type TestPageSate = {
    current: number,
    result: (number[] | null)[],
}

export const QuizPage = () => {
    let params = useParams();
    let topicId = params.id;

    //ToDo:
    //Получать тесты с бэкенда

    const tests = [
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
        },
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
        },
        {
            q: "Yes, but I have tickets to Moscow.", a: "____ we be in Moscow in five hours?",
            variants: ["Do", "Will", "Don't"], correct: 1
        },
        {
            q: "Yes, but there are bears in Russia.", a: "...We ____ be in Moscow.",
            variants: ["won't", "will", "are"], correct: 0
        },
    ];

    const [state, setState] = useState({
        current: 0,
        result: new Array(tests.length).fill(null)
    } as TestPageSate)

    //let tests = fetch()


    const onAnswered = (event: React.MouseEvent<HTMLElement>, answerId) => {
        let newResult = state.result
        if (newResult[state.current] == null)
        {
            newResult[state.current] = [answerId]
        }
        else
        {
            newResult[state.current]?.push(answerId)
        }

        setState({
            ...state,
            result: newResult,
            current: state.current + (answerId === tests[state.current].correct ? 1 : 0)
        })
    }

    return (
        <>
            <H1>
                Тест
            </H1>
            <CarouselGridWrapper>
                <Carousel index={state.current * 2 + 1} axis={"x"} scrollSnapType={"mandatory"}>
                    {tests.map((test, testIndex) => (
                        <>
                            <CarouselCol sizeS={1} sizeM={1} sizeL={2} sizeXL={3} />
                            <CarouselCol sizeS={4} sizeM={4} sizeL={6} sizeXL={8} >
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
                                                                if (state.result[testIndex]?.includes(i) && i === test.correct)
                                                                    return "success";
                                                                else if (state.result[testIndex]?.includes(i))
                                                                    return 'critical'
                                                                return 'secondary'

                                                            })()}
                                                            onClick={(event) => onAnswered(event, i)}
                                                    >{`${i + 1}. ${v}`}</Button>
                                                ))
                                            }

                                        </CardContent>
                                    </CardBody>
                                </Card>
                            </CarouselCol>
                        </>
                    ))}
                    <CarouselCol sizeS={1} sizeM={1} sizeL={2} sizeXL={3} />
                </Carousel>

            </CarouselGridWrapper>

            <PaginationDots style={{
                marginTop: '20px'
            }}>
                {Array.from(Array(tests.length).keys()).map((_, i) => (
                    <PaginationDot style={{
                        width: '30px',
                        height: i === state.current ? '9px' : '6px',
                        background: (() => {
                            if (state.result[i] == null)
                                return 'white';
                            if (state.result[i]![0] === tests[i].correct)
                                return 'green'
                            return 'red'

                        })()
                    }} key={`item:${i}`} isActive={i === state.current}/>
                ))}
            </PaginationDots>
        </>
    )
}