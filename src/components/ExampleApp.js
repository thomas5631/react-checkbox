import React from 'react';
import { Checkbox } from './Checkbox';

export class ExampleApp extends React.Component {
  state = { checked: false };

  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked });

  render() {
    return (
      <div>
        <label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <span>Label Text</span>
        </label>
      </div>
    );
  }
}
