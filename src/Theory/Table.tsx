import {render} from "react-dom";
import React from "react";
import {TextBox, Row, Col, Container} from "@salutejs/plasma-ui"
import {MarginBottom, Center, CellStyle, Strong} from "./Styles"
import {TextS, TextM} from "@salutejs/plasma-ui"

const TableCell = ({ data, indexRow, indexColumn }) => {
  var offset = 0
  const step = 4
  const size = 4
  if (indexColumn == 1 && data[0].length <= indexRow)
    offset += step
  if (indexColumn == 2) {
    if (data[0].length > indexRow && data[1].length <= indexRow)
      offset += step
    if (data[0].length <= indexRow && data[1].length <= indexRow)
      offset += 2 * step
  }
    
  return (
    <Col size={size} offset={offset}>
      {indexRow == 0 ?  
      <TextS><CellStyle><Center><Strong>
        { data[indexColumn][indexRow]} 
      </Strong></Center></CellStyle></TextS>
      : <TextS><CellStyle><Center>
        { data[indexColumn][indexRow]}
        </Center></CellStyle></TextS>}
    </Col>
  )
}

const TableRow = ({data, indexRow}) => {
  return (
    <Row>
      {indexRow < data[0].length ? <TableCell data={data} indexRow={indexRow} indexColumn={0} /> : <></>}
      {indexRow < data[1].length ? <TableCell data={data} indexRow={indexRow} indexColumn={1} /> : <></>}
      {indexRow < data[2].length ? <TableCell data={data} indexRow={indexRow} indexColumn={2} /> : <></>}
    </Row>
  )
};

export const Table = ({ data, name }) => {    
  const maxRows = Math.max(data[0].length, data[1].length, data[2].length);
  let rows : number[] = [];
  for (let i = 0; i < maxRows; i++) {
    rows.push(i)
  }
return (
  <> 
    <Center><MarginBottom><TextBox title={name}/></MarginBottom></Center>
    <Container>
      {rows.map(indexRow => <TableRow data={data} indexRow={indexRow} />)}
    </Container>
  </>
)
}

