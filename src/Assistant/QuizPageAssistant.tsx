import React, {useEffect, useRef} from "react";
import {AssistantAppState, createAssistant} from "@salutejs/client";
import {assistant, initializeAssistant} from "./Assistant";

export const QuizPageAssistant: React.FC = ({children}) => {

    const assistantStateRef = useRef<AssistantAppState>({});
    const assistantRef = useRef<ReturnType<typeof createAssistant>>();

    useEffect(() => {
        assistant.on("data", (event : any) => {
            console.log(`assistant.on(data)`, event);
            if(event)
            {
                try{
                    // @ts-ignore
                    let action = event["action"];
                    switch (event.type)
                    {
                        case 'smart_app_data':
                            switch (action.type)
                            {
                                case "set_quiz_page":

                                    break;
                                default:
                                    break;
                            }
                            break;
                    }
                } catch (e) {
                    console.error(e);
                }
            }
        });
    }, []);


    return (
        <>
            {children}
        </>
    )
}