import React from 'react'
import MusicItem from './MusicItem/MusicItem'

const Music = (props) => {
  let MusicElements = props.MusicPage.MusicData.map(audio=>(<MusicItem name={audio.name} author={audio.author} duration={audio.duration} />))
  return (
    <div>
      {MusicElements}
    </div>
  )
}

export default Music
