import {DsplL, TextBoxBiggerTitle} from "@salutejs/plasma-ui";
import React from "react";

export type QuizResultsProps = {
    right: number,
    total: number
}

export const QuizResults = ({right, total}: QuizResultsProps) => {

    let percent = right/total;
    let text : string;
    if(percent < 0.4)
        text = 'В следующий раз получится!'
    else if(percent < 0.6)
        text = 'Сойдёт!'
    else if(percent < 0.8)
        text = 'Очень хорошо'
    else if(percent < 1)
        text = 'Почти идеально'
    else
        text = 'Идеально!'


    return (
        <>
            <div style={{
                textAlign: 'center'
            }}>
                <DsplL
                >{`${right}/${total}`}</DsplL>
                <TextBoxBiggerTitle>
                    {text}
                </TextBoxBiggerTitle>
            </div>


        </>
    )
}