import {render} from "react-dom";
import React from "react";
import { Table } from "../Parts/Table";
import { TheoryListWithExamples} from "../Parts/TheoryList";
import { TableData, TimeAction, TypeAction} from "../Data/PastContinuousData"

export const PastContinuous = () => {
    return (
        <>
          <Table data = {TableData} name = {"Past Continuous"} />          
          <TheoryListWithExamples data={TimeAction} time={true} />
          <TheoryListWithExamples data={TypeAction} time={false} />
        </>
    )
}