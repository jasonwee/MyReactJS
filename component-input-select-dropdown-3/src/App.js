import React from "react";

import CustomSelect from "./CustomSelect";
import "./styles.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      defaultSelectText: "Please select an option",
      countryList: [
        { id: 1, name: "Australia" },
        { id: 2, name: "Brazil" },
        { id: 3, name: "China" },
        { id: 4, name: "Denmark" },
        { id: 5, name: "Egypt" },
        { id: 6, name: "Finland" },
        { id: 7, name: "Ghana" },
        { id: 8, name: "Hungary" },
        { id: 9, name: "India" },
        { id: 10, name: "Japan" }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <h3 className="title">Custom React Select</h3>
        <div className="test">
          <CustomSelect
            defaultText={this.state.defaultSelectText}
            optionsList={this.state.countryList}
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}

export default App;
