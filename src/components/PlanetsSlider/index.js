// Write your code he
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props
  return (
    <>
      <div className="bg-container" testid="planets">
        <h1 className="heading">PLANETS</h1>
        <Slider>
          {planetsList.map(each => (
            <PlanetItem planetsList={each} key={each.id} />
          ))}
        </Slider>
      </div>
    </>
  )
}

export default PlanetSlider

// {
//   /* {planetsList.map(each => (
//               <PlanetItem planetsList={each} key={each.id} />
//             ))} */
// }
