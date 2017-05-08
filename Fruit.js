import React from 'react';

class FruitSelector extends React.PureComponent {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {selectValue:'Orange'};
  }

    handleChange(e){
        this.setState({selectValue:e.target.value});
    }

    render() {
console.log('e.target.value', this)
        return (
        <div>
         <select onChange={this.handleChange}>
            <option defaultValue="Orange">Orange</option>
            <option value="Radish">Radish</option>
            <option value="Cherry">Cherry</option>
          </select>
          <p>You selected {this.state.selectValue}</p>
          </div>
        );
    }
};
export default FruitSelector;
