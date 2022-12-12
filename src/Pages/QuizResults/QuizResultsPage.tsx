import React from "react"
import {Button, DsplL} from "@salutejs/plasma-ui";
import {QuizResults} from "./QuizResults";
import {useNavigate, useSearchParams} from "react-router-dom";


export const QuizResultsPage = () => {
    const navigate = useNavigate();
    const [query, _] = useSearchParams();

    return (
        <>

            <QuizResults right={parseInt(query.get('right') ?? "0")} total={parseInt(query.get('total') ?? "0")}/>
            <Button
                onClick={() => navigate('/')}

            >
                Вернуться
            </Button>
        </>
    )
}