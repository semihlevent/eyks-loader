import React, { useState } from 'react';
import EyksLoader from './EyksLoader';
import './resources/style.css';


const App = () => {
    const [done, setDone] = useState(false);

    setTimeout(() => setDone(true), 8000)

    return (
        <div><EyksLoader done={done} /></div>
    );
}

export default App;