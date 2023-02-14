import React, {useEffect, useRef} from "react";
import {AssistantAppState, createAssistant} from "@sberdevices/assistant-client";
import {initializeAssistant} from "./Assistant";

export const QuizPageAssistant: React.FC = ({children}) => {

    const assistantStateRef = useRef<AssistantAppState>({});
    const assistantRef = useRef<ReturnType<typeof createAssistant>>();

    useEffect(() => {

    }, []);


    return (
        <>
            {children}
        </>
    )
}