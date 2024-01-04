import VideoCard from "./VideoCard"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constants";


const VideosContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos()
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    //console.log(json);
    setVideos(json.items)
  };

  //console.log(videos[0])

  return (
    <div className="flex flex-wrap">
      {videos.map((each) => (
        <Link to ={"/watch?v="+ each.id} >
            <VideoCard key = {each.id} info = {each} />
        </Link>
      ))} 
    </div>
  )
}

export default VideosContainer