import React, {Component} from 'react';
import './css-modules/ToDoList.css';

class ToDoList extends Component {
  toggle(e) {
    const element = e.currentTarget;
    element.classList.toggle('ben');
  }

  render() {
    return(
      <div className="wrapper">
            <div className="header">
                  <h1>ISTC To Do List</h1>
          </div>
          <div className = "main">
              <ul>
                  <li onClick = {this.toggle} id = 'first'>Planning</li>
                  <li onClick = {this.toggle} id = 'second'>Testing</li>
                  <li onClick = {this.toggle} id = 'third'>Task A</li>
                  <li onClick = {this.toggle} id = 'fourth'>Task B</li>
                  <li onClick = {this.toggle} id = 'fifth'>Pushing to Git</li>
              </ul>
          </div>
      </div>
    )
  }
}

export default ToDoList;