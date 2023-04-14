import React, {useEffect, useState} from "react"
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";

import {PresentSimple} from "../../Theory/Theory/Simple/PresentSimple";
import {PastSimple} from "../../Theory/Theory/Simple/PastSimple";
import {FutureSimple} from "../../Theory/Theory/Simple/FutureSimple";
import {PastContinuous} from "../../Theory/Theory/Continuous/PastContinuous";
import {PresentContinuous} from "../../Theory/Theory/Continuous/PresentContinuous";
import {FutureContinuous} from "../../Theory/Theory/Continuous/FutureContinuous";
import {PastPerfect} from "../../Theory/Theory/Perfect/PastPerfect";
import {PresentPerfect} from "../../Theory/Theory/Perfect/PresentPerfect";
import {FuturePerfect} from "../../Theory/Theory/Perfect/FuturePerfect";
import {FuturePerfectContinuous} from "../../Theory/Theory/PerfectContinuous/FuturePerfectContinuous";
import {PastPerfectContinuous} from "../../Theory/Theory/PerfectContinuous/PastPerfectContinuous";
import {PresentPerfectContinuous} from "../../Theory/Theory/PerfectContinuous/PresentPerfectContinuous";
import {Results} from "../../Theory/Parts/Results"
import {Request} from "../../Theory/Parts/Request"


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
                //return <Request/>
                //return <Results />
                return <PresentSimple name={"Present Simple"}/>
            case 'past-simple':
                return <PastSimple name={"Past Simple"}/>
            case 'future-simple':
                return <FutureSimple name={"Future Simple"}/>
            case 'past-continuous':
                return <PastContinuous name={"Past Continuous"}/>
            case 'present-continuous':
                return <PresentContinuous name={"Present Continuous"}/>
            case 'future-continuous':
                return <FutureContinuous name={"Future Continuous"}/>  
            case 'past-perfect':
                return <PastPerfect name={"Past Perfect"}/>
            case 'present-perfect':
                return <PresentPerfect name={"Present Perfect"}/>
            case 'future-perfect':
                return <FuturePerfect name={"Future Perfect"}/> 
            case 'past-perfect-continuous':
                    return <PastPerfectContinuous name={"Past Perfect Continuous"}/>
                case 'present-perfect-continuous':
                    return <PresentPerfectContinuous name={"Present Perfect Continuous"}/>
                case 'future-perfect-continuous':
                    return <FuturePerfectContinuous name={"Future PerfectContinuous"}/>               
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

