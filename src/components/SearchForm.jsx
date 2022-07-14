export default function SearchForm({ filterParam, setFilterParam }) {
  return (
    <input
      value={filterParam}
      onChange={(event) => setFilterParam(event.target.value)}
    />
  )
}
