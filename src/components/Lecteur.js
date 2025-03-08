// https://github.com/lhz516/react-h5-audio-player#readme
// https://www.bensound.com/
import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import musicTracks from "../utilities/loadPlaylist.js";

export default function Lecteur() {

    // États du lecteur
    const [trackIndex, setTrackIndex] = useState(0);
    const [autoPlay, setautoPlay] = useState(false)
    const [isLecteurVisible, setIsLecteurVisible] = useState(false);

    // Fonctions de navigation
    const handleClickPrevious = () => {
        setTrackIndex((currentTrack) =>
            currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
        );
    };

    const handleClickNext = () => {
        setTrackIndex((currentTrack) =>
            currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
        );
    };

    // Toggle pour afficher/cacher l'interface du lecteur
    const toggleLecteur = () => {
        if (isLecteurVisible === false) {
            setIsLecteurVisible(!isLecteurVisible);
        }
        else {
            var elem = document.querySelector(".lecteur");
            if (elem.style.display !== "none") {
                elem.style.display = "none"
            } else {
                elem.style.display = "block";
            }
        }
    };

    return (
        <div className="conteneurLecteur">
            <div className="conteneurHeader">
                <div className="HeaderLecteur">
                    <div className="scroll-left">
                        <p>{musicTracks[trackIndex].name}</p>
                    </div>
                </div>

                {/* Bouton pour afficher/masquer le lecteur */}
                <div id="cacherlecteur">
                    <button id="boutoncacher" onClick={toggleLecteur}>
                        <img src='..\logolecteur.png' alt="Masquer"></img>
                    </button>
                </div>
            </div>

            {/* Affichage du lecteur si `isLecteurVisible` est `true` */}
            {isLecteurVisible && (
                <div className="lecteur">
                    <AudioPlayer
                        //style={{ display: "none" }}  // Caché mais toujours actif
                        autoPlay={autoPlay}
                        layout="stacked"
                        src={musicTracks[trackIndex].src}
                        onPlay={() => console.log("Lecture en cours...")}
                        //header={`Now playing: ${musicTracks[trackIndex].name}`}
                        showSkipControls={true}
                        showJumpControls={false}
                        onClickPrevious={handleClickPrevious}
                        onClickNext={handleClickNext}
                        onEnded={handleClickNext}
                    />

                    {/* Playlist affichée sous forme de liste de boutons */}
                    <div className="playlistLecteur">
                        <ul className="listePlaylist">
                            {musicTracks.map((track, index) => (
                                <li key={index}>
                                    <button
                                        className={`boutonLecteur ${index === trackIndex ? "active" : ""}`}
                                        onClick={() => {
                                            if (trackIndex !== index) {
                                                setTrackIndex(index);
                                                document.querySelector("audio")?.play();
                                                setautoPlay(true);
                                            }
                                        }
                                        }
                                    >
                                        {track.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}