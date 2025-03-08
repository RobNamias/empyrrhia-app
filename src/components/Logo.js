import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* Les images importées depuis la balise IMG sont accessibles dans "public", attention à l'arborescence */}
            <img src="./logo192.png" alt="logo react" />
            <h3>Empyrrhia</h3>
        </div>
    );
};

export default Logo;