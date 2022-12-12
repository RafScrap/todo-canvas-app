import React from "react"
import {Button, DsplL} from "@salutejs/plasma-ui";
import {QuizResults} from "./QuizResults";
import {useNavigate} from "react-router-dom";


export const QuizResultsPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <QuizResults right={3} total={10}/>
            <Button
                onClick={() => navigate('/')}

            >
                Вернуться
            </Button>
        </>
    )
}