import { useState } from "react";

const SimpleInput = (props) => {
  const [enterInput, setEnterInput] = useState("");
  const [inputNameValid, setInputNameValid] = useState(true);

  const inputHandler = (e) => {
    setEnterInput(e.target.value);
    console.log(enterInput);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (enterInput.trim() === "") {
      setInputNameValid(false);
      return;
    }
    setEnterInput(true);
  };
  const nameInputClass = inputNameValid
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={inputHandler} />
        {!inputNameValid && <p className="error-text">Enter Valid Name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
