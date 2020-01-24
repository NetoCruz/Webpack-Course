import React, { useState } from 'react'
import data from './data.json'
import Loader from './Loader'
import logo from '../../images/platzi.png'
import video from '../../videos/que-es-core.mp4'
import '../../sass/sass.scss'
console.log(data)

function App(){
    const [loaderList, setLoaderList]= useState([])
    function handleClick(){
        setLoaderList(data.loaders)
    }
    return(
        <div>  
            <p className="sass">esto es sass</p>          
            <p>que linda aplicacion en React.js</p> 
              <img src={logo} alt="logo" width={40}/>
             <video src={video} width={360} controls poster={logo}></video>
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