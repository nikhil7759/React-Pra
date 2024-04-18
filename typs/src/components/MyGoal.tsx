type MyGoa = {
  title: string
  description: string
}

const MyGoal = ({ title, description }: MyGoa) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  )
}

export default MyGoal
