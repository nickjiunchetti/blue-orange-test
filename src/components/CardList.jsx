import Card from './Card'

export default function CardList({ data = [] }) {
  return (
    <div>
      {data.map((person, index) => (
        <Card person={person} key={index} />
      ))}
    </div>
  )
}
