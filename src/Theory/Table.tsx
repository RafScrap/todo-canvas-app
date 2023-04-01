import {render} from "react-dom";
import React from "react";
import {TextBox, Row, Col, Container} from "@salutejs/plasma-ui"
import {MarginBottom, Center, CellStyle, Strong} from "./Styles"
import {TextS, TextM} from "@salutejs/plasma-ui"

const TableCell = ({ data, indexRow, indexColumn }) => {
  var offset = 0
  const step = 4
  const size = 4
  if (indexColumn == 1 && data[0].size < indexColumn + 1)
    offset += step
  if (indexColumn == 2 && data[0].size < indexColumn + 1 && data[1].size < indexColumn + 1)
    offset += step
  return (
    <Col size={size} offset={offset}>
      {indexRow == 0 ?  
      <TextS><CellStyle><Center><Strong>
        { data[indexColumn][indexRow] } 
      </Strong></Center></CellStyle></TextS>
      : <TextS><CellStyle><Center>
        { data[indexColumn][indexRow] }
        </Center></CellStyle></TextS>}
    </Col>
  )
}

const TableRow = ({data, indexRow}) => {
  return (
    <Row>
      <TableCell data={data} indexRow={indexRow} indexColumn={0} />
      <TableCell data={data} indexRow={indexRow} indexColumn={1} />
      <TableCell data={data} indexRow={indexRow} indexColumn={2} />
    </Row>
  )
};

export const Table = ({ data, name }) => {    

return (
  <> 
    <Center><MarginBottom><TextBox title={name}/></MarginBottom></Center>
    <Container>      
      <TableRow data={data} indexRow={0} />
      <TableRow data={data} indexRow={1} />
      <TableRow data={data} indexRow={2} />
    </Container>
  </>
)
}