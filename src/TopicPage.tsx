import React, {useState} from "react"
import {useLocation, useParams} from "react-router";
import ReactMarkdown from 'react-markdown'
import {
    Button, Card, CardBody, CardContent, Carousel, CarouselCol, CarouselGridWrapper, CarouselItem,
    DsplL,
    H1,
    H3,
    H5, PaginationDot, PaginationDots,
    TextBoxBiggerTitle,
    TextBoxBigTitle, TextBoxRoot,
    TextBoxSubTitle,
    TextL,
    TextM
} from "@salutejs/plasma-ui";
import {Link, NavLink} from "react-router-dom";
import ReactCSSTransitionGroup from 'react-transition-group';

export const TopicPage = () => {
    let params = useParams();
    let id = params.id;

    let md = `
# Present Simple

Lorem ipsum dolor sit amet, **consectetur** adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis.
Risus nullam eget felis eget nunc. Elit sed vulputate mi sit amet mauris commodo. Et netus et malesuada fames.
Quam id leo in vitae turpis massa. Quis vel eros donec ac odio tempor. Ac feugiat sed lectus vestibulum mattis ullamcorper. 


## Subtitle 1

em nulla pharetra diam sit amet nisl suscipit. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Netus et malesuada fames ac turpis egestas integer eget. Commodo sed egestas egestas fringilla.
Tellus in hac habitasse platea dictumst vestibulum. Neque volutpat ac tincidunt vitae.

## Subtitle 2

Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Gravida quis blandit turpis cursus in hac. Fermentum iaculis eu non diam phasellus vestibulum lorem.
Ac tortor dignissim convallis aenean et tortor at risus viverra.
Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Ut placerat orci nulla pellentesque dignissim enim.
    
`
    return (
        <>
            <div>
                <ReactMarkdown
                    components={{
                        h1: ({node}) => <TextBoxBiggerTitle>{node.children[0]["value"]}</TextBoxBiggerTitle>,
                        h2: ({node}) => <TextBoxBigTitle>{node.children[0]["value"]}</TextBoxBigTitle>,
                        h3: ({node}) => <TextBoxSubTitle>{node.children[0]["value"]}</TextBoxSubTitle>,

                        p: ({node, ...props}) => {
                            return <TextM>{node.children[0]["value"]}</TextM>
                        }

                    }}
                >{md}</ReactMarkdown>
            </div>
            <NavLink to={`/topic/${id}/test`}>
                <Button style={{
                    marginTop: '35px',
                    marginInline: '20%'
                }}

                        view={"primary"}
                >
                    Начать тест
                </Button>
            </NavLink>

        </>
    )
}

type TestPageSate = {
    current: number,
    result: (number[] | null)[],
}

export const TestPage = () => {
    let params = useParams();
    let topicId = params.id;

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

type Test = {
    q: string,
    a: string,
    variants: string[],
    correct: number
}

export type TestProps = {
    test: Test
}

const Test = ({test}: TestProps) => {

    return (
        <>

        </>
    )
}