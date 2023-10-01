import { useState } from "react";

function counterFunc() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>  
    );
}

export default counterFunc;