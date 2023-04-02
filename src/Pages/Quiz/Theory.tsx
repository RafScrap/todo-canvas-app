import React, {useEffect, useState} from "react"
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";
import {MarkdownBox} from "../../Components/MarkdownBox";
import {RectSkeleton} from "@salutejs/plasma-ui";
import {PresentSimple} from "../../Theory/Theory/PresentSimple";
import {PastSimple} from "../../Theory/Theory/PastSimple";
import {FutureSimple} from "../../Theory/Theory/FutureSimple";
import {PastContinuous} from "../../Theory/Theory/PastContinuous";
import {PresentContinuous} from "../../Theory/Theory/PresentContinuous";
import {FutureContinuous} from "../../Theory/Theory/FutureContinuous";

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
                return <PresentSimple />
            case 'past-simple':
                return <PastSimple />
            case 'future-simple':
                return <FutureSimple />
            case 'past-continuous':
                return <PastContinuous />
            case 'present-continuous':
                return <PresentContinuous />
            case 'future-continuous':
                return <FutureContinuous />        
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

