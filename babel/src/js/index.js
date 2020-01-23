import '../css/index.css'
import search from './search'
import render from './render'

const id = prompt('quien es ese pokemon')

search(id)
    .then((data)=>{
      render(data)
    })
    .catch(()=>{
        console.log('error')
    })


//  if(module.hot){
//      module.hot.accept('./text.js',function(){
//          console.log('Hemos recargado')
//          text();
//      })
//  }


//document.body.innerHTML='Hola mundo desde webpack'