import {render} from "react-dom";
import React from "react";
import { Table } from "../../Parts/Table";
import { TheoryListWithExamples} from "../../Parts/TheoryList";
import {TableData, TimeAction} from "../../Data/Perfect/PresentPerfectData"
import {Introduction, TypeAction} from "../../Data/Perfect/PerfectData"
import {TextS, Image} from "@salutejs/plasma-ui"
import { MarginTopBottom, Flex, Block } from "../../Parts/Styles";

export const PresentPerfect = ({name}) => {
    return (
        <>
          <Table data = {TableData} name = {name} />  
          <MarginTopBottom>
            <MarginTopBottom><TextS>{Introduction[0]}</TextS></MarginTopBottom>     
            <MarginTopBottom><TextS>{Introduction[1]}</TextS></MarginTopBottom> 
          </MarginTopBottom>
          <Flex>
          <Block>
            <Image 
            src={require('../../Data/Images/PresentPerfectNo.png')}
          />
          </Block>
          <Block>
          <Image 
            src={require('../../Data/Images/PresentPerfectYes.png')}
          />
          </Block>
          </Flex>
          <TheoryListWithExamples data={TypeAction} time={false} bold={false}/>       
          <TheoryListWithExamples data={TimeAction} time={true} bold={false}/>
          
        </>
    )
}