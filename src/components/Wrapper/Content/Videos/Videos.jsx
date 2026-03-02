import React from 'react'
import Video from './Video/Video'

const Videos = (props) => {
  let VideosElements = props.VideosPage.VideosData.map(video=>(<Video name={video.name} author={video.author} duration={video.duration} />))
  return (
    <div>
      {VideosElements}
    </div>
  )
}

export default Videos
