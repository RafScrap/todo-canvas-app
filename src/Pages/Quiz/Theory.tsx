import React, {useEffect, useState} from "react"
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";
import {MarkdownBox} from "../../Components/MarkdownBox";
import {RectSkeleton} from "@salutejs/plasma-ui";
import {PresentSimpleTheory} from "../../Theory/PresentSimpleTheory";

export const Theory = () => {
    const navigate = useNavigate();

    let params = useParams();
    let id = params.id;
    const [state, setState] = useState({
        loaded: false,
        markdown: ""
    })

    const getTheory = (key: string | undefined) => {
        switch (key) {
            case 'present-simple':
                return <PresentSimpleTheory/>
            default:
                return <></>
        }
    }

    return (
        <>
            {getTheory(id)}
        </>
    )
}

