import {render} from "react-dom";
import React from "react";
import { Table } from "../../Parts/Table";
import { ExampleListBe, TheoryListWithExamples } from "../../Parts/TheoryList";
import { TableData, TimeAction, TypeAction, TableDataBe, ExamplesBe} from "../../Data/Simple/PresentSimpleData"

export const PresentSimple = ({name}) => {
    return (
        <>
          <Table data = {TableData} name = {name} />         
          <TheoryListWithExamples data={TimeAction} time={true} bold={true}/>
          <TheoryListWithExamples data={TypeAction} time={false} bold={true}/>
          <Table data = {TableDataBe} name = {"Исключение: глагол to be"} />
          <ExampleListBe data={ExamplesBe} />
        </>
    )
}