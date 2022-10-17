import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';
import Slider from './Slider';

function Player(props) {

  const audioEl = useRef(null);
  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const onChange = (e) => {
    const audio = audioEl.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  useEffect(() => {
      if (isPlaying) {
          audioEl.current.play();
      } else {
          audioEl.current.pause();
      }
  });
  
  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

//    const changeRange = () => {
//     audioEl.current.currentTime = progressBar.current.value;
//     // audioEl.current.volume = e.target.value / 100;
//     changePlayerCurrentTime();
//   };

//   const changePlayerCurrentTime = () => {
//     progressBar.current.style.setProperty(
//         "--seek-before-width",
//         `${(progressBar.current.value / duration) * 100}%`
//     );
//     setCurrentTime(progressBar.current.value);
//   };

  const SkipSong = (forwards = true) => {
    if (forwards) {
        props.setCurrentSongIndex(() => {
            let temp = props.currentSongIndex;
            temp++;

            if (temp > props.songs.length - 1) {
                temp = 0;
            }

            return temp;
        });
    } else {
        props.setCurrentSongIndex(() => {
            let temp = props.currentSongIndex;
            temp--;

            if (temp < 0) {
                temp = props.songs.length - 1;
            }

            return temp;
        });
    }
}

return (
    <div className="c-player">
        <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
        ></audio>
        <h4 className='playing-now'>Playing now</h4>
        <PlayerDetails song={props.songs[props.currentSongIndex]} />
        <Slider percentage={percentage} onChange={onChange} />      
        <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} duration={duration}
        currentTime={currentTime} SkipSong={SkipSong} />
        <p className='next-up'>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
    </div>    
)
}

export default Player;
