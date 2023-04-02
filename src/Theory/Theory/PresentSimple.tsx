import {render} from "react-dom";
import React from "react";
import { Table } from "../Parts/Table";
import { ExampleListBe, TheoryListWithExamples } from "../Parts/TheoryList";
import { TableData, TimeAction, TypeAction, TableDataBe, ExamplesBe} from "../Data/PresentSimpleData"

export const PresentSimple = () => {
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