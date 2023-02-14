import {AssistantAppState, createAssistant, createSmartappDebugger} from "@sberdevices/assistant-client";
import React, {useEffect, useRef} from "react";

export const initializeAssistant = (getState: any) => {
    if (process.env.NODE_ENV === 'development') {
        return createSmartappDebugger({
            token: process.env.REACT_APP_TOKEN ?? "",
            initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
            getState,
            nativePanel: {
                defaultText: 'Покажи что-нибудь',
                screenshotMode: false,
                tabIndex: -1,
            },
        });
    }

    return createAssistant({ getState });
};

export type AssistantPageProps = {
    assistant: ReturnType<typeof useRef<ReturnType<typeof createAssistant>>>
}

export const Assistant: React.FC = ({children}) => {

    const assistantStateRef = useRef<AssistantAppState>({});
    const assistantRef = useRef<ReturnType<typeof createAssistant>>();

    useEffect(() => {
        try {
            assistantRef.current = initializeAssistant(() => assistantStateRef.current);

            assistantRef.current.on('start', () => {
                console.log("Ассисент запущен")
            });
        }
        catch (e)
        {
            console.error(e);
        }
    }, []);


    return (
        <>
            {children}
        </>
    )
}