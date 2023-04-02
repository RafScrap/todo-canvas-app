import {render} from "react-dom";
import React from "react";
import { Table } from "./Table";
import { ExampleListBe, TheoryListWithExamples } from "./TheoryList";
import { TableData, TimeAction, TypeAction, TableDataBe, ExamplesBe} from "./Data/PresentSimpleData"

export const PresentSimpleTheory = () => {
    return (
        <>
          <Table data = {TableData} name = {"Present Simple"} />          
          <TheoryListWithExamples data={TimeAction} time={true} />
          <TheoryListWithExamples data={TypeAction} time={false} />
          <Table data = {TableDataBe} name = {"Исключение: глагол to be"} />
          <ExampleListBe data={ExamplesBe} />
        </>
    )
}