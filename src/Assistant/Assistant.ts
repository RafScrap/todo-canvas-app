import {createAssistant, createSmartappDebugger} from "@sberdevices/assistant-client";

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