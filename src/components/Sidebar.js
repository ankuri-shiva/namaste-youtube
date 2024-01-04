import { useSelector } from "react-redux"
import {Link} from "react-router-dom"


const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className="w-2/12 pl-8 py-2 ">

      <ul className="mb-2">
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
        <li>Trending</li>
      </ul>
      <h1 className="font-bold text-lg">Explore</h1>
      <ul className="mb-2">
        <li>Music</li>
        <li>Movies</li>
        <li>Shoping</li>
        <li>Gaminig</li>
        <li>News</li>
      </ul>
      <h1 className="font-bold text-lg">Subscriptns</h1>
      <ul>
        <li>Music</li>
        <li>Movies</li>
        <li>Shoping</li>
        <li>Gaminig</li>
        <li>News</li>
      </ul>
      </div>
  )
}

export default Sidebar