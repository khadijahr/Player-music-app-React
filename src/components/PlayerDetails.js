import React from 'react'


function PlayerDetails(props) {
  return (
    <div className='c-player--details'>
        <div className='details-img' style={{ backgroundImage:`url(${props.song.img_src})` }}>
            {/* <img src={props.song.img_src} alt="" /> */}
        </div>
        <h3 className='detail-title'>{props.song.title}</h3>
        <h4 className='detail-artist'>{props.song.artist}</h4>        
    </div>
  )
}

export default PlayerDetails;