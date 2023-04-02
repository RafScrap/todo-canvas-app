import {render} from "react-dom";
import React from "react";
import { Table } from "../Parts/Table";
import { TheoryListWithExamples, ExampleListBe} from "../Parts/TheoryList";
import { TableData, TimeAction, TypeAction, TableDataBe, ExamplesBe} from "../Data/PastSimpleData"

export const PastSimple = () => {
    return (
        <>
          <Table data = {TableData} name = {"Past Simple"} />          
          <TheoryListWithExamples data={TimeAction} time={true} />
          <TheoryListWithExamples data={TypeAction} time={false} />
          <Table data = {TableDataBe} name = {"Исключение: глагол to be"} />
          <ExampleListBe data={ExamplesBe} />
        </>
    )
}