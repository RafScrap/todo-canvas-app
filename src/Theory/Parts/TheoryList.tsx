
import {render} from "react-dom";
import React from "react";
import {MarkedList, MarkedItem, TextS, TextXS} from "@salutejs/plasma-ui"
import { IconInfo, IconTimerStroke} from '@salutejs/plasma-icons';
import {MarginTopBottom, Em} from "./Styles"

export const TheoryList = ({ data }) => {    
    return (
    <>
        {data.map((theory) => 
            <MarkedItem text={theory}>
                <IconInfo size="xs"/>
            </MarkedItem>
        )}
    </>
    )
}

export const TheoryListWithExamples = ({ data, time }) => {    
    return (
        <MarginTopBottom>
        <MarkedList>
            {data.map((item) => 
            <>
                <MarkedItem text={item.theory} style={{fontWeight: 'bold', fontSize: '0.9rem'}}>
                    {time ?  <IconTimerStroke size="xs" /> : <IconInfo size="xs"/>}
                </MarkedItem>
                {item.examples.map((i) =>
                    <> 
                    <MarginTopBottom><TextS>{i.example}</TextS></MarginTopBottom>
                    <MarginTopBottom><TextXS>{i.translation}<Em>{" " + i.note}</Em></TextXS></MarginTopBottom>
                    </>
                )}
            </>
            )}
        </MarkedList>
        </MarginTopBottom>
    )
}

export const ExampleListBe = ({ data }) => {    
    return (
        <MarginTopBottom>
            {data.map((i) => 
                <> 
                <MarginTopBottom><TextS>{i.example}</TextS></MarginTopBottom>
                <MarginTopBottom><TextXS>{i.translation}</TextXS></MarginTopBottom>
                </>
            )}
        </MarginTopBottom>
    )
}