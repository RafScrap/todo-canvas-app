import {render} from "react-dom";
import React from "react";

const TableCell = ({ data }) => {
    return (
      <td align="center">
         { data }
      </td>
    )
  }

const TableRow = ({ data }) => {
    return (
      <tr>
        { data.map((cell) => <TableCell data={cell} />)}
      </tr>
    )
  };

export const Table = ({ data, name }) => {    
    return (
      <>
        <p>{name}</p>
          <table>
            { data.map((row) => <TableRow data={row} />)}
          </table>
      </>
    )
}