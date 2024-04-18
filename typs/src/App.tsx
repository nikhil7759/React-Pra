import Header from "./components/Header"
import MyGoal from "./components/MyGoal"
import goal from "./assets/goals.jpg"

const App = () => {
  return (
    <main>
      <Header image={{ src: goal, alt: "goalimg" }}>
        <h1>My Goal</h1>
      </Header>
      <MyGoal
        title="Learn React and Ts"
        description="Learn it from ground and go pro"
      />
    </main>
  )
}

export default App
