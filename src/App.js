import React, { Component } from 'react';
import ChildComp from './ChildComp';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      value: 1,
    }
    this.changeValue = this.changeValue.bind(this);
  }
  changeValue( value ) {
    this.setState( { value: value } );
  }
  render() {
    return (
      <>
        <ChildComp value={this.state.value} changeValue={this.changeValue} />
        {this.state.value}
      </>
    );
  }
}

export default App;