import React, { useState } from 'react'
import data from './data.json'
import Loader from './Loader'
console.log(data)

function App(){
    const [loaderList, setLoaderList]= useState([])
    function handleClick(){
        setLoaderList(data.loaders)
    }
    return(
        <div>            
            <p>que linda aplicacion en React.js</p> 

            <ul>
                {
                   loaderList.map(item=><Loader data={item} key={item.id}/>)
                }
            </ul>
            <button onClick={handleClick}>Mostra lo aprendido</button>
        </div>
    )
}

export default App