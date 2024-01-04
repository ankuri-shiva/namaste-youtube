
import VideosContainer from './VideosContainer'
import ButtonsList from "./ButtonsList"

const MainContainer = () => {
  return (
    <div className='w-10/12'>
      <ButtonsList />
      <VideosContainer />
    </div>
  )
}

export default MainContainer