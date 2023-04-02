import {render} from "react-dom";
import React from "react";
import { Table } from "./Table";
import { TheoryListWithExamples} from "./TheoryList";
import { TableData, TimeAction, TypeAction} from "./Data/FutureSimpleData"

export const FutureSimpleTheory = () => {
    return (
        <>
          <Table data = {TableData} name = {"Future Simple"} />          
          <TheoryListWithExamples data={TimeAction} time={true} />
          <TheoryListWithExamples data={TypeAction} time={false} />
        </>
    )
}