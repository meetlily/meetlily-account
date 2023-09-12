'use client'
import ReactPlayer from 'react-player'

export default function PlayerComponent() {
    return (
      <div>
        <ReactPlayer url='rtmp://your-rtmp-server/live/stream-key' playing controls/>
      </div>
    );
  }