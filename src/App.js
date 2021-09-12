import React, { useState } from 'react';
// import EyksLoader from './lib/EyksLoader';
import {EyksLoader} from '../dist';
import './app.css';




const App = () => {
    const [done, setDone] = useState(false);

    setTimeout(() => setDone(true), 8000)

    return (
        <div>
            <EyksLoader 
                done={done} 
                statusBar
                size={20}
                spinDelay={300}
            />
        
        </div>
    );
}

export default App;