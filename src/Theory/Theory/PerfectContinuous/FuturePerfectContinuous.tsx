import {render} from "react-dom";
import React from "react";
import { Table } from "../../Parts/Table";
import { TheoryListWithExamples} from "../../Parts/TheoryList";
import {TableData, TimeAction, TypeAction} from "../../Data/PerfectContinuous/FuturePerfectContinuousData"

export const FuturePerfectContinuous = ({name}) => {
    return (
        <>
          <Table data = {TableData} name = {name} />  
          <TheoryListWithExamples data={TypeAction} time={false} bold={false}/>       
          <TheoryListWithExamples data={TimeAction} time={true} bold={false}/>
        </>
    )
}