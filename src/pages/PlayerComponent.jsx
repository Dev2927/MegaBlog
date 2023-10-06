import React from 'react'
import bgVideo from '../assets/video3.mp4'

function PlayerComponent() {
  return (
    <div>
      <video src={bgVideo} autoPlay loop muted/>
    </div>
  )
}

export default PlayerComponent
