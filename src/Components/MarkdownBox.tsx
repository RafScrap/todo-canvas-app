import {TextBoxBiggerTitle, TextBoxBigTitle, TextBoxSubTitle, TextM} from "@salutejs/plasma-ui";
import ReactMarkdown from "react-markdown";
import React from "react";
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'

type MarkdownBoxProps = {
    markdown: string
}

export const MarkdownBox = ({markdown} : MarkdownBoxProps) => {
    return(
        <>
            <ReactMarkdown
                components={{
                    //ToDo:
                    //Добавить поддержку остальных компонентов MarkDown

                    h1: ({node}) => <TextBoxBiggerTitle>{node.children[0]["value"]}</TextBoxBiggerTitle>,
                    h2: ({node}) => <TextBoxBigTitle>{node.children[0]["value"]}</TextBoxBigTitle>,
                    h3: ({node}) => <TextBoxSubTitle>{node.children[0]["value"]}</TextBoxSubTitle>,

                    p: ({node, ...props}) => {
                        return <TextM>{node.children[0]["value"]}</TextM>
                    },


                }}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}

            >{markdown}</ReactMarkdown>
        </>
    )
}