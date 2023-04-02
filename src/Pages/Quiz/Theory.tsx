import React, {useEffect, useState} from "react"
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";
import {MarkdownBox} from "../../Components/MarkdownBox";
import {RectSkeleton} from "@salutejs/plasma-ui";
import {PresentSimpleTheory} from "../../Theory/PresentSimpleTheory";
import {PastSimpleTheory} from "../../Theory/PastSimpleTheory";
import {FutureSimpleTheory} from "../../Theory/FutureSimpleTheory";

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
                return <PresentSimpleTheory />
            case 'past-simple':
                return <PastSimpleTheory />
            case 'future-simple':
                return <FutureSimpleTheory />
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

