import React from 'react';
import Navigation from '../components/Navigation';


const Dates = () => {
    return (
        <div>
            <Navigation />
            <div className="next3show">
                <h1> PROCHAINES DATES : </h1>
                <ul>
                    <li>
                        <img id="bobigny" alt=""></img>
                        <div className='textShow'>
                            <div className='date'>21.06.25</div><p> Fête de la musique <br />Bobigny-en-Bauce (93) <br /> avec JCVD & Napalm Nolife</p>
                        </div>
                    </li>
                    <hr />
                    <li><img id="brockoly" alt=""></img>
                        <div className='textShow'>
                            <div className='date'>13.07.25</div><p> Festival bROCKoly<br /> Schwingtown (31) <br />avec As I Die Farting & Crack Sabbath</p>
                        </div>
                    </li>
                    <hr />
                    <li><img id="sceneouverte" alt=""></img>
                        <div className='textShow'>
                            <div className='date'>32.10.25</div>
                            <p>Scène semi-ouverte <br /> Danstoncul (69)<br /> avec PoliceFuckerz & Swip?Not!</p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Dates;