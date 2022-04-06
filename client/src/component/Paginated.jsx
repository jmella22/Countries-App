import React, { useState } from "react";

const Paginated = ({ page, setPage, maxNumPages }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    if (parseInt(page) < maxNumPages) {
      setInput(parseInt(page) + 1);
      setPage(parseInt(page) + 1);
    }
  };

  const prevPage = () => {
    if (parseInt(page) > 1) {
      setInput(parseInt(page) - 1);
      setPage(parseInt(page) - 1);
    }
  };

  const onKeyDOwn = (e) => {
    if (e.keyCode == 13) {
      //setPage(parseInt(e.target.value));
      if (
        parseInt(e.target.value) < 1 ||
        parseInt(e.target.value) > maxNumPages ||
        isNaN(parseInt(e.target.value))
      ) {
        setPage(1);
        setInput(1);
      } else {
        setPage(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <button onClick={prevPage}>-</button>
      <input
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDOwn(e)}
        value={input}
        type="text"
        autoComplete="off"
      />
      <p>de {maxNumPages}</p>
      <button onClick={nextPage}>+</button>
    </div>
  );
};
export default Paginated;
