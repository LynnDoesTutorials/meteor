import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';

import Task from './Task.js';


// this code disappears when we wrap the component in a container?
// // App component represents the whole app
// export default class App extends Component {
//   getTasks() {
//     return [
//       { _id: 1, text: 'First Task to do' },
//       { _id: 2, text: 'Second Task to do' },
//       { _id: 3, text: 'Third Task to do' },
//     ];
//   }

// renderTasks() {
//   return this.getTasks().map((task) => (
//     <Task key={task._id} task={task} />
//   ));
// }

// render() {
//   return (
//     <div className="container">
//       <header>
//         <h1>Todo List for Lynn</h1>
//       </header>

//       <ul>
//         {this.renderTasks()}
//       </ul>
//     </div>
//   );
// }

class App extends Component {
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
  // which lines skipped and should I add them back
  //);
  // okay, so following lines are added back and all is good
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List for Lynn</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
})(App);
