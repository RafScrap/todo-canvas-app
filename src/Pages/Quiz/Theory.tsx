import React, {useEffect, useState} from "react"
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";
import {MarkdownBox} from "../../Components/MarkdownBox";
import {RectSkeleton} from "@salutejs/plasma-ui";

export const Theory = () => {
    const navigate = useNavigate();

    let params = useParams();
    let id = params.id;
    const [state, setState] = useState({
        loaded: false,
        markdown: ""
    })

    useEffect(() => {
        if(!state.loaded)
        fetch(`https://raw.githubusercontent.com/RafScrap/todo-canvas-app/main/data/${id}/theory.md`)
            .then(async (resp) => {
                const md = await resp.text()
                setState({
                    ...state,
                    loaded: true,
                    markdown: md
                })
            })
            .catch((reason) => {
                console.error(reason)
            })
    })

    return (
        <>
            {state.loaded ?
                <MarkdownBox markdown={state.markdown}/>
                :
                <RectSkeleton width={"100%"} height={"300px"}/>
                }
        </>
    )
}

