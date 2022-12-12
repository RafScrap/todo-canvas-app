import {DsplL} from "@salutejs/plasma-ui";
import React from "react";

export type QuizResultsProps = {
    right: number,
    total: number
}

export const QuizResults = ({right, total} : QuizResultsProps) => {


    return (
        <>
            <DsplL>{`${right}/${total}`}</DsplL>
        </>
    )
}