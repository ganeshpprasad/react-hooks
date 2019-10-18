import React, { useState, useEffect } from 'react'

// export class Button extends Component {
//     render() {
//         return (
//             <div>
//                 Button
//             </div>
//         )
//     }
// }

function Button() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState({ c: 0, i: 'wowo' });
    
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count.c} times`;
    });

    return (
        <div>
            <p>You clicked {count.c} times</p>
            <button onClick={() => setCount( { ...count ,c : count.c + 1, i: count.i + '!' } )}>
                Click me
            </button>
        </div>
    );
}
    
    
    export default Button
    