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
import {useNavigate, useSearchParams} from "react-router-dom";
import {QuizInstance} from "./QuizInstance";
import {Answer} from "./Entities";



type TestPageSate = {
    current: number,
    result: Answer[],
}

export const QuizPage123 = () => {
    const navigate = useNavigate();

    let params = useParams();
    let [_, setQuery] = useSearchParams();
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
        result: [] as Answer[]
    } as TestPageSate)



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
                                <QuizInstance
                                    test={test}
                                    onChosen={
                                    (res) => {
                                        let newResult = state.result
                                        newResult.push({id: testIndex, state: res} as Answer)
                                        setState({
                                            ...state,
                                            result: newResult,
                                            current: state.current + 1
                                        })

                                        if(state.current + 1 === tests.length)
                                        {
                                            const right = newResult.filter(a => a.state ==="right").length
                                            navigate({
                                                pathname: `/results`,
                                                search: `?total=${newResult.length}&right=${right}`
                                            })
                                        }
                                    }}
                                />
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
                            if (state.result[i]?.state == null)
                                return 'white';
                            if (state.result[i].state === "right")
                                return 'green'
                            return 'red'

                        })()
                    }} key={`item:${i}`} isActive={i === state.current}/>
                ))}
            </PaginationDots>
        </>
    )
}

