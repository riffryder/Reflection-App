import React from 'react';
import List from './list.js';

//Create stateful App component 
class App extends React.Component {
  constructor(props) {
    super(props)
    //set initial state
    this.state = {
      entries: []
    }
  }

  render() {
    return (
      <div>
        <h1>Title</h1>
        <span>
          <button>Add</button>
        </span>
        <div>
          <List entries={this.state.entries} />
        </div>
      </div>
    )
  }
}

export default App;