import React from "react";

const Card = (props) => {
  return (
    // <h1>RoboFriends</h1>
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img alt="robots" src="https://robohash.org/test" />
      <div>
        <h2>{ props.name }</h2>
        <p>{ props.email }</p>
      </div>
    </div>
  );
};

export default Card;