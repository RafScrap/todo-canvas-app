import {render} from "react-dom";
import React from "react";
import { Table } from "../../Parts/Table";
import { TheoryListWithExamples} from "../../Parts/TheoryList";
import { TableData, TimeAction, TypeAction} from "../../Data/Continuous/FutureContinuousData"

export const FutureContinuous = ({name}) => {
    return (
        <>
          <Table data = {TableData} name = {name} />          
          <TheoryListWithExamples data={TimeAction} time={true} bold={true}/>
          <TheoryListWithExamples data={TypeAction} time={false} bold={true}/>
        </>
    )
}