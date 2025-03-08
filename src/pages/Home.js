import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <>
            <Navigation />
            <div className="pageHome">
                <div className='presentation'>
                    <div className='photopresentation'></div>
                    <div className='textpresentation'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ullam repellendus quae commodi nisi accusamus? Accusamus, officia porro.
                            Eius fugiat soluta voluptatibus praesentium numquam officiis, deleniti quia exercitationem dolorum consequuntur sit.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ullam repellendus quae commodi nisi accusamus? Accusamus, officia porro.
                            Eius fugiat soluta voluptatibus praesentium numquam officiis, deleniti quia exercitationem dolorum consequuntur sit.
                        </p>
                    </div>
                </div>
                <div className="video">
                    <iframe width="100%" height="625" src="https://www.youtube.com/embed/4cH9h8_xQ7Y?list=PLOH2a8j41CSA4bVi6dLUm7DCs1Z8Kk4Ut" title="dB Ill - Krakapov" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="next3show">
                    <h1> PROCHAINES DATES : </h1>
                    <ul>
                        <li>21.06.25 Fête de la musique - Bobigny-en-Bauce (93) avec JCVD & Napalm Nolife</li>
                        <li>13.07.25 Festival bROCKoly - Schwingtown (31) avec As I Die Farting & Crack Sabbath</li>
                        <li>32.10.25 Scène semi-ouverte - Danstoncul (69) avec PoliceFuckerz & Swip?Not!</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;