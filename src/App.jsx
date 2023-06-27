import React, { useState } from 'react'
import "./index.css"

const App = () => {

  const [count, setCound] = useState(0)
  if(count === 100){
    setCound(0)
  }


  return (
    <>
      <center>
        <div className="container">
          <div className="NumOyna">{count}</div>
          <br />
          <div className="ButtonDiv">
            <button onClick={() => setCound(0)} className='Reset'>Reset</button>
            <br />
            <button onClick={() => setCound(count + 1)} className="Start">Click</button>
          </div>
        </div>
      </center>
    </>
  )
}

export default App;
