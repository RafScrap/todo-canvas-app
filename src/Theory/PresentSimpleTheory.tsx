import {render} from "react-dom";
import {RectSkeleton, TextBoxBigTitle} from "@salutejs/plasma-ui";
import React from "react";

export const PresentSimpleTheory = () => {
    return (
        <>
            <TextBoxBigTitle>Present Simple</TextBoxBigTitle>
            <table>
                <tr>
                    <th>Утверждение (+)</th>
                    <th>Отрицание (-)</th>
                    <th>Вопрос (?)</th>
                </tr>
                <tr>
                    <td>
                        Подл + глагол-ed
                    </td>
                    <td>
                        Подл + did not/didn’t + глагол
                    </td>
                    <td>
                        Did/ Didn’t + подл + глагол?
                        Did + подл + not + глагол?
                    </td>
                </tr>
            </table>
        </>
    )
}