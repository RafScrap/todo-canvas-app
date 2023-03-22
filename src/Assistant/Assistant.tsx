import {AssistantAppState, createAssistant, createSmartappDebugger} from "@salutejs/client";
import React, {useEffect, useRef, useState} from "react";

export const initializeAssistant = (getState) => {
    if (process.env.NODE_ENV === 'development') {
        return createSmartappDebugger({
            token: process.env.REACT_APP_TOKEN!,
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

export const assistant = initializeAssistant(() => { });

export const Assistant: React.FC = ({children}) => {
    const [state,setState] = useState({
        loaded: false
    });

    useEffect(() => {
        assistant.on("start", () => {
            console.log(`assistant.on(start)`);
        });
    })

    return (
        <>
            {children}
        </>
    )
}

// export const Assistant: React.FC = ({children}) => {
//
//     const assistantStateRef = useRef<AssistantAppState>({});
//     const assistantRef = useRef<ReturnType<typeof createAssistant>>();
//
//     useEffect(() => {
//         try {
//             assistantRef.current = initializeAssistant(() => assistantStateRef.current);
//
//             assistantRef.current.on('start', () => {
//                 console.log("Ассисент запущен")
//             });
//         }
//         catch (e)
//         {
//             console.error(e);
//         }
//     }, []);
//
//
//     return (
//         <>
//             {children}
//         </>
//     )
// }