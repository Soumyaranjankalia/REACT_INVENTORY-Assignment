import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 0
  });
  // Create add and remove functions here that changes the
  // state.
  const handlebook = (value) => {
    if (inv.books + value < 0) return;

    setInv((previousHandel) => {
      return { ...previousHandel, books: inv.books + value };
    });
  };
  const handleNotes = (value) => {
    if (inv.notebooks + value < 0) return;
    setInv((previousHandel) => {
      return { ...previousHandel, notebooks: inv.notebooks + value };
    });
  };
  const handlePen = (value) => {
    if (inv.pens + value < 0) return;
    setInv((previousHandel) => {
      return { ...previousHandel, pens: inv.pens + value };
    });
  };
  const handleInk = (value) => {
    if (inv.inkpens + value < 0) return;
    setInv((previousHandel) => {
      return { ...previousHandel, inkpens: inv.inkpens + value };
    });
  };
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px"
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handlebook(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handlebook(-1);
          }}
        >
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handleNotes(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handleNotes(-1);
          }}
        >
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handlePen(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handlePen(-1);
          }}
        >
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button
          className="circlularButton"
          onClick={() => {
            handleInk(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            handleInk(-1);
          }}
        >
          -
        </button>
        <span>{inv.inkpens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {inv.books + inv.notebooks + inv.pens + inv.inkpens}
    </div>
  );
};