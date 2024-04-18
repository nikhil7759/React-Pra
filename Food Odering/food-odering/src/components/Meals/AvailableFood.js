import Card from "../UI/Card";
import FoodItem from "./MealItem/FoodItem";
import "./AvailableFood.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Panner Tikka",
    description: "Finest paneer and veggies",
    price: 200,
  },
  {
    id: "m2",
    name: "Butter Chicken",
    description: "An Indian specialty!",
    price: 220,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "Tandoori fillings, meaty",
    price: 180,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 150,
  },
];

const AvailableFood = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <FoodItem
      key={meal.id}
      title={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className="meals">
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableFood;
