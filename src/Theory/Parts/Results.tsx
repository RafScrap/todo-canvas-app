import {render} from "react-dom";
import React from "react";
import { CircularBar, RatingBar } from "./Bars";
import { Flex } from "./Styles"
import { Card , TextL} from "@salutejs/plasma-ui";

function findPercentage(dataOthers, score) {
  let numer = 0
  dataOthers.forEach((item, index) => {if (index < score) numer += item})
  const denom = dataOthers.reduce((acc, num) => acc + num, 0)
  return (numer * 100 - numer * 100 % denom) / denom;
}

export const Results = ({}) => {
    const dataOthers = [11, 22, 33, 55, 66]
    const name = "Sasha"
    const score = 3;
    const percentage = findPercentage(dataOthers, score);
    const results = `Поздравляем, ${name}! Ваш балл ${score} превосходит балл ${percentage}% всех пользователей!`
    return (
        <Flex>
          <Card style={{padding: '1em'}}>
            <CircularBar percentage={percentage}/>
          </Card>
          <Card style={{padding: '1em 2em', width: '20%'}}>
            <TextL>{results}</TextL>
          </Card>
          <Card style={{width: '60%', padding: '1.5em'}}>
          <RatingBar dataOthers={dataOthers} score={score}/>
          </Card>
        </Flex>  
   );
  };