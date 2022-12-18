import './index.css'

const PlanetItem = props => {
  const {planetsList} = props
  const {name, imageUrl, description} = planetsList

  return (
    <>
      <div className="planets-container">
        <img src={imageUrl} className="img" alt={`planet ${name}`} />
        <h1 className="name">{name}</h1>
        <p className="desc">{description}</p>
      </div>
    </>
  )
}
export default PlanetItem
