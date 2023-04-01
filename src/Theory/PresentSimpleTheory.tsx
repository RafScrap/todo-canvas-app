import {render} from "react-dom";
import React from "react";
import { Table } from "./Table";
import { TheoryListWithExamples, TheoryList } from "./TheoryList";

import styled from 'styled-components';

const PastTable = [ ["Утверждение", "Подл + глагол-ed"], 
["Отрицание", "Подл + did not/didn’t + глагол"], 
["Вопрос", "Did/ Didn’t + подл + глагол?", "Did/ Didn + подл + not + глагол?"] ];

const PastTheory1 = [
    {
    theory: "в прошлом:",
    examples: 
        [
            {
            example: "The cat jumped on the chair a minute ago.",
            note: "",
            translation: "Кот прыгнул на стул минуту назад."
            }
        ],        
    },
    {
    theory: "в определенный! момент времени",
    examples:
        [
            {
            example: "— Didn't he write the letter yesterday?", 
            note: "Момент времени, вчера, указан прямо",
            translation: "Он не написал письмо вчера?"
            },
            {
            example: "— He didn't write the letter.", 
            note: "Момент времени, вчера, не указан, но из контекста ясен для обоих собеседников",
            translation: "Он не написал письмо."
            }
        ]
    }
]

const PastTheory2 = [
    {
        theory: "постоянно-регулярное:",
        examples:
        [
            {
            example: "I walked my dog every day a year ago.",
            note: "", 
            translation: "Я гулял с моей собакой каждый день год назад."
            }
        ]
    
    },   
    {
        theory: "«единичное»",
        examples:
        [
            {
            example: "He did not write a letter yesterday.",
            note: "",  
            translation: "Он не написал письмо вчера."
            }
        ]
    }
]


export const PresentSimpleTheory = () => {
    return (
        <>
          <Table data = {PastTable} name = {"Present Simple"} />
          
          <TheoryListWithExamples data={PastTheory1} number={true} />
          
          <TheoryListWithExamples data={PastTheory2} number={false} />
        </>
    )
}