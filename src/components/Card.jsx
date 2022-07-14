export default function Card({ person }) {
  return (
    <div>
      <div>
        <h2>{person.name}</h2>
        <p>Height: {person.height}</p>
        <p>Gender: {person.gender}</p>
      </div>
    </div>
  )
}
