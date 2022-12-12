import React, {useState} from "react"
import {useParams} from "react-router";
import ReactMarkdown from 'react-markdown'
import {
    Button, Card, CardBody, CardContent, Carousel, CarouselCol, CarouselGridWrapper, H1,
    PaginationDot, PaginationDots,
    TextBoxBiggerTitle,
    TextBoxBigTitle, TextBoxRoot,
    TextBoxSubTitle,
    TextL,
    TextM
} from "@salutejs/plasma-ui";
import {useNavigate} from "react-router-dom";
import {MarkdownBox} from "../../Components/MarkdownBox";

export const TheoryPage = () => {
    const navigate = useNavigate();

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
            <MarkdownBox markdown={md}/>
            <Button style={{
                marginTop: '35px',
                marginInline: '20%'
            }}

                    view={"primary"}
                    onClick={() => navigate(`/topic/${id}/test`)}
            >
                Начать тест
            </Button>

        </>
    )
}
