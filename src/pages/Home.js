import React from 'react';
import Navigation from '../components/Navigation';


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
                <hr />
                {/* <div className="video">
                    <iframe width="100%" height="625" src="https://www.youtube.com/embed/4cH9h8_xQ7Y?list=PLOH2a8j41CSA4bVi6dLUm7DCs1Z8Kk4Ut" title="dB Ill - Krakapov" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div> */}
            </div>

        </>
    );
};

export default Home;