import "./FoodItem.css";
import FoodItemForm from "./FoodItemForm";
const FoodItem = (props) => {
  return (
    <li className="meal">
      <div>
        <h2>{props.title}</h2>
        <div className="description">{props.description}</div>
        <div className="price">₹ {props.price}</div>
      </div>
      <div>
        <FoodItemForm />
      </div>
    </li>
  );
};

export default FoodItem;
