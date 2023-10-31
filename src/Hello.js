import React, { Component } from "react";
import './Hello.css';

class Hello extends Component {
  render() {
    return (
      <div className="f6 tc">
        <h1>Get over here!</h1>
        <p>Welcome to { this.props.greeting }.</p>
      </div>
    );
  };
};

// The above code block can also be written as:
// const Hello = (props) => {
//   return (
//     <div className="f6 tc">
//       <h1>Get over here!</h1>
//       <p>Welcome to { props.greeting }</p>
//     </div>
//   );
// };

export default Hello;
