import React from 'react';
import Entry from './entry.js';

//Create stateless List component
const List = function (props) {
  return (
    <div>
      {props.entries.map(entry => <Entry info={entry} />)}
    </div>
  )
}

export default List;