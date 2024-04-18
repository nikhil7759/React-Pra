import "./FoodItemForm.css";
import Input from "../../UI/Input";

const FoodItemForm = (props) => {
  return (
    <form className="form">
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: 1,
          max: 10,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ ADD</button>
    </form>
  );
};
export default FoodItemForm;
