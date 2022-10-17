  import {useState, useEffect} from "react";
  import './App.css';
  import Player from "./components/Player"; 
  
  function App() {
    const [songs] = useState([
      {
        title: "Dans mon monde",
        artist: "Anas",
        img_src: "./images/anas.png",
        src: "./music/Dans_mon_monde.mp3"
      },
      {
        title: "Bene",
        artist: "Pnl",
        img_src: "./images/unnamed.jpg",
        src: "./music/Bene.mp3"
      },
      {
        title: "Pour Nous",
        artist: "Tayc & Vegedream",
        img_src: "./images/Tays_vegedream.jpg",
        src: "./music/Pour_nous.mp3"
      },
      {
        title: "Luz de Luna",
        artist: "PNL",
        img_src: "./images/500x500.jpg",
        src: "./music/Luz_de_Luna.mp3"
      },
      {
        title: "Te Amo",
        artist: "Moha K",
        img_src: "./images/Moha_k.jpg",
        src: "./music/MohaK_Te _amo.mp3"
      }      
    ]);
  
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);
  
    useEffect(() => {
      setNextSongIndex(() => {
        if (currentSongIndex + 1 > songs.length - 1) {
          return 0;
        } else {
          return currentSongIndex + 1;
        }
      });
    }, [currentSongIndex]);
  
    return (
      <div className="App">        
        <Player 
          currentSongIndex={currentSongIndex} 
          setCurrentSongIndex={setCurrentSongIndex} 
          nextSongIndex={nextSongIndex} 
          songs={songs}
        />
      </div>
    );
  }
  
  export default App;