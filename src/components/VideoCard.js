import React from 'react'

const VideoCard = ({info}) => {
  // console.log(info?.snippet?.thumbnails?.medium?.url)
  // console.log(info?.statistics)

  // const {snippet,} = info;
  // console.log(snippet);
 
  //const {  channelTitle, title} = info?.snippet;
  //console.log(channelTitle)
  //const {commentCount, likeCount, viewCount} = info?.statistics

  return (
    <div className='p-2 m-2 w-64 shadow-2xl rounded-lg'>
      <img src = {info?.snippet?.thumbnails?.medium?.url}
      alt = "thumbnail"
      className='rounded-lg' />
      <ul className='py-2 w-64'>
        <li className='font-bold'>{info?.snippet?.title}</li>
        <li className='font-bold text-gray-500'>{info?.snippet?.channelTitle}</li>
        <li className='text-gray-500'>{info?.statistics?.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard