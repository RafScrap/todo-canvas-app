import {render} from "react-dom";
import {RectSkeleton, TextBoxBigTitle} from "@salutejs/plasma-ui";
import React from "react";
import { Table } from "./Table";
import { TheoryWithExamples, TheoryWithoutExamples } from "./TheoryList";

const PastTable = [ [<b>Утверждение</b>, <b>Отрицание</b>, <b>Вопрос</b>], ["Подл + глагол-ed", "Подл + did not/didn’t + глагол", "Did/ Didn’t + подл + глагол?"], 
["", "", "Did/ Didn + подл + not + глагол?"] ];

const PastTheory1 = [
    {
        theory: "в прошлом (Past):",
        examples: ["The cat jumped on the chair a minute ago. (Кот прыгнул на стул минуту назад)"]
    },
    {
        theory: "в определенный (!) момент времени",
        examples: ["— Didn't he write the letter yesterday? (Он не написал письмо вчера?)",
        <>{"Момент времени, вчера, указан прямо"}</>, 
        "— He didn't write the letter. (Он не написал письмо)", 
        <>{"Момент времени, вчера, не указан, но из контекста выше ясен для обоих собеседников."}</>]
    }]

const PastTheory2 = [
    {
        theory: "постоянно-регулярное:",
        examples: ["I walked my dog every day a year ago. (Я гулял с моей собакой каждый день год назад.)"]
    },
    {
        theory: "в определенный (!) момент времени",
        examples: ["— Didn't he write the letter yesterday? (Он не написал письмо вчера?)", 
        <>{"Момент времени, вчера, не указан, но из контекста выше ясен для обоих собеседников."}</>, 
        "— He didn't write the letter. (Он не написал письмо):", 
        "Mомент времени, вчера, не указан, но из контекста выше ясен для обоих собеседников."]
    },    
    {
        theory: "«единичное» (Simple)",
        examples: ["He did not write a letter yesterday. (Он не написал письмо вчера.)"]
    }
]


export const PresentSimpleTheory = () => {
    return (
        <>
            <Table data = {PastTable} name = {"Present Simple"}></Table>
        </>
    )
}