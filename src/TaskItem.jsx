import React from "react";
import "./App.css";
import horse from "C:/Users/black/todo-canvas-app/src/horse.jpg";
import girl from "C:/Users/black/todo-canvas-app/src/avatar_g2.jpg";

export class TaskItem extends React.Component {
    render() {
        return (
            <div>
            <div className = "block q-item"> 
              <img src={horse} alt="Avatar"/>
              {this.props.q}
            </div>
            <div className = "block a-item">
              <img src={girl} alt="avatar_g2.jpg" />
              <div> {this.props.a} </div>
              <span className = {this.props.visB0}>
                <button className="button_test" onClick={() => this.props.onClick(0)}>1. {this.props.v0}</button>
              </span>
              <span className = {this.props.visB1}>
                <button className="button_test" onClick={() => this.props.onClick(1)}> 2. {this.props.v1}</button>
              </span>
              <span className = {this.props.visB2}>
                <button className="button_test" onClick={() => this.props.onClick(2)}>3. {this.props.v2}</button>
              </span>
            </div>
          </div>    
        );
    }
}