
import {render} from "react-dom";
import React from "react";
import {MarkedList, MarkedItem, TextS, TextXS} from "@salutejs/plasma-ui"
import { IconInfo, IconTimerStroke} from '@salutejs/plasma-icons';
import {MarginTopBottom, Em} from "./Styles"

export const TheoryListWithExamples = ({ data, time, bold }) => {    
    var Style = {fontSize: '0.9rem', fontWeight: 400}
    if (bold) Style.fontWeight = 700
    return (
        <MarginTopBottom>
        <MarkedList>
            {data.map((item) => 
            <>
                <MarkedItem text={item.theory} style={Style}    >
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