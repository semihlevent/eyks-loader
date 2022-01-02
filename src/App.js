import React, { useState } from 'react';
import EyksLoader from './lib/EyksLoader';
// import {EyksLoader} from '../dist';
import './app.css';
import BoardMembersLoader from './lib/BoardMembersLoader';
import World from './lib/World';




const App = () => {
    const [done, setDone] = useState(false);
    const [spinning, setSpinning] = useState(false);

    setTimeout(() => setDone(true), 8000)

    return (
        // <div className="page-container">
            
        //     <h1>Essay 1</h1>
        //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore in voluptas maiores quae commodi quaerat. Doloribus reprehenderit quia, maiores exercitationem tempore atque iste ut quisquam ipsam vel nesciunt eius explicabo incidunt quae assumenda obcaecati blanditiis, in commodi et, deserunt harum quos molestias. Tempora quasi, officiis ea repellendus ex incidunt?</p>
        //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore molestias natus voluptatibus neque ipsum aliquam suscipit laboriosam. Labore numquam optio totam incidunt, soluta doloremque dolore nobis ipsa sed nam ratione nihil dignissimos! Vel eum ab, ea dolor eligendi commodi laborum nobis perferendis beatae? Nisi voluptas adipisci quas culpa cumque?</p>
        //     <p>Accusantium accusamus aut fuga illum porro animi autem ducimus labore sapiente in libero eligendi rerum numquam modi, nostrum incidunt culpa. Aliquam tempora enim inventore aperiam, odit repellendus ut error consequatur nostrum itaque quas vitae possimus quisquam facere, laborum veritatis optio a saepe amet! Perferendis est dignissimos suscipit unde quisquam sint?</p>
        //     <p>Adipisci odit veritatis commodi quisquam blanditiis alias recusandae eligendi consequuntur id architecto repellat velit nihil, eum voluptatem asperiores assumenda quis explicabo! Fuga, quisquam, iste reprehenderit aut architecto quasi quibusdam accusantium labore maxime quaerat ipsum. Id non labore veritatis rem, enim odit, earum distinctio reiciendis odio eum aliquid expedita voluptatum dolor.</p>
        //     <p>Rem, quidem expedita vitae nisi optio totam labore doloremque odio provident necessitatibus maxime, in excepturi dolores inventore tempore ea recusandae. Iste corporis tempore consectetur fugiat unde repellendus minima nesciunt exercitationem natus facilis itaque corrupti quas perspiciatis quia eaque accusantium inventore nam aut saepe, aspernatur maxime ea consequuntur dolorem aperiam? Nulla!</p>
        // </div>
        // <EyksLoader 
        //     color="white"
        //     backgroundColor="rgb(63, 63, 63)"
        //     glowingColor="white"
        //     done={done} 
        //     statusBar
        //     size={8}
        //     spinDelay={300}
        // />
        <div 
            style={{fontSize: "15px"}} 
            onMouseEnter={() => setSpinning(true)}
            onMouseLeave={() => setSpinning(false)}
        >
            <World 
                // size={4}
                spin={true} spinDuration={"150s"} 
                // worldSpin={true} worldSpinDuration={"90s"}
                // backgroundColor="lightblue"
                // colorPrimary="white"
            />
        </div>

    );
}

export default App;