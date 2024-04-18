import React from "react"
import { useRef } from "react"

const App = () => {
  const enteredName = useRef()
  const enterdPassword = useRef()

  const submitHandler = (e) => {
    e.preventDefault()

    const data = {
      name: enteredName.current.value,
      password: enterdPassword.current.value,
    }
    console.log(data)
    enteredName.current.value = ""
    enterdPassword.current.value = ""
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter UserName" ref={enteredName} />
        <input
          type="password"
          placeholder="Enter Password"
          ref={enterdPassword}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default App
