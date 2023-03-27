import {render} from "react-dom";
import React from "react";

export const TheoryWithoutExamples = ({ data }) => {    
    return (
        <ul>
            {data.map((theory) => <li>{theory}</li>)}
        </ul>
    )
}

export const TheoryWithExamples = ({ data }) => {    
    return (
        <ul>
            {data.map((elem) => 
              <>
              <li>{elem.theory}</li>
              {elem.examples.map((example) => <p>{example}</p>)}
              </>
            )}
        </ul>
    )
}