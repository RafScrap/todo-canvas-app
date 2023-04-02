import {render} from "react-dom";
import React from "react";
import { Table } from "../Parts/Table";
import { TheoryListWithExamples} from "../Parts/TheoryList";
import { TableData, TimeAction, TypeAction} from "../Data/FutureContinuousData"

export const FutureContinuous = () => {
    return (
        <>
          <Table data = {TableData} name = {"Future Continuous"} />          
          <TheoryListWithExamples data={TimeAction} time={true} />
          <TheoryListWithExamples data={TypeAction} time={false} />
        </>
    )
}