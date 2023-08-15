import React from "react";

const customStyles = {
  fontWeight: 'bold',
  color: 'red',
  backgroundColor: "#fff"
};

const SlotM = (props) =>  {
  let {a, b, c} = props;

  if (a === b && b === c) {
    return (
      <div className="inner-content matching">
        <h1>
          {a} {b} {c}
        </h1>
        <h3>This is matching</h3>
      <hr />
      </div>
    );
  } else {
    return (
      <div className="inner-content not-matching">
        <h1>
          {a} {b} {c}
        </h1>
        <h3>This is not matching</h3>
        <hr />
      </div>
    );
  }
}

const App = () => {
  return (
    <>
        <h1 className="Heading_style">Welcome To 🎰 <span style={customStyles}>Slot Machine Game</span> 🎰</h1>
    <div className="container">
      <div className="slot-container">
        <div className="slot-box">
          <SlotM a="😄" b="😄" c="😄" />
          <SlotM a="💪" b="🧠" c="😄" />
          <SlotM a="❤️" b="❤️" c="❤️" />
          <SlotM a="🧠" b="😄" c="❤️" />
          <SlotM a="🧠" b="😄" c="❤️" />
          <SlotM a="🧠" b="😄" c="❤️" />
          <SlotM a="🧠" b="😄" c="❤️" />
          <SlotM a="👍" b="👍" c="👍" />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
