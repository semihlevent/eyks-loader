import React, { useState } from 'react';
import Loader from './Loader';
import './resources/style.css';


const App = () => {
    const [done, setDone] = useState(false);

    setTimeout(() => setDone(true), 8000)

    return (
        <div><Loader done={done} /></div>
    );
}

export default App;