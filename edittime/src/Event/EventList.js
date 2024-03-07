import React, { Component } from 'react';


class EventList extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.events.map((event) => (
            <li key={event._id}>{event.title}</li>
            // Replace "title" with the property name in your MongoDB documents
          ))}
        </ul>
      </div>
    );
  }
}

export default EventList;
