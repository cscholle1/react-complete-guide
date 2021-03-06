import React, { PureComponent } from 'react';
import { Person } from './Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //     console.log('[Persons.js] getDerivedStateFromProps', props);
  //     return state;
  // }
  
  // componentWillReceiveProps(props) {
  //     console.log('[Persons.js] componentDidUpdate');
  // }
  
  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log('[Persons.js] shouldComponentUpdate');
  //     if (nextProps.persons !== this.props.persons || 
  //         nextProps.changed !== this.props.changed || 
  //         nextProps.deletePerson !== this.props.deletePerson) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  // }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }
  
  // componentWillUpdate() {
  
  // }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }
  
  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }
  
  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map( (person, index) => {
      return <Person
        key={person.id}
        delete={() => this.props.deletePerson(index)}
        name={person.name}
        age={person.age}
        changed={(event) => this.props.nameChanged(event, person.id)} />
    });
  };
}

export default Persons;