import React, {useEffect, useRef} from "react";
import {AssistantAppState, createAssistant} from "@salutejs/client"
import {assistant, initializeAssistant} from "./Assistant";
import {useRecoilState} from "recoil";
import {useNavigate} from "react-router-dom";

export const ChooseTopicPageAssistant: React.FC = ({children}) => {

    const assistantStateRef = useRef<AssistantAppState>({});
    const assistantRef = useRef<ReturnType<typeof createAssistant>>();

    const nav = useNavigate();

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
                                case "choose_topic":
                                    nav(`/topic/${action.id}`)
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
    })


    return (
        <>
            {children}
        </>
    )
}