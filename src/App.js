import React, { useState } from 'react';
// import EyksLoader from './lib/EyksLoader';
import { EyksLoader } from '../dist/index';



const App = () => {
    const [done, setDone] = useState(false);

    setTimeout(() => setDone(true), 8000)

    return (
        <div>
            <EyksLoader 
                done={done} 
                statusBar
            />
        
        </div>
    );
}

export default App;