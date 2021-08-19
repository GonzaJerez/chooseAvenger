const vengador= [
                ['./img/wasp.jpg', 'WASP'],
                ['./img/wong.jpg', 'WONG'],
                ['./img/valkiria.jpg', 'VALKIRIA'],
                ['./img/pepper.jpg', 'PEPER POTTS'],
                ['./img/mantis.jpeg', 'MANTIS'],
                ['./img/drax.jpg', 'DRAX'],
                ['./img/groot.jpg', 'GROOT'],
                ['./img/gamora.jpg', 'GAMORA'],
                ['./img/nebula.jpg', 'NEBULA'],
                ['./img/rocket.jpg', 'ROCKET'],
                ['./img/okoye.jpg', 'OKOYE'],
                ['./img/shuri.jpg', 'SHURI'],
                ['./img/soldado-invierno.jpg', 'SOLDADO DEL INVIERNO'],
                ['./img/spiderman.jpg', 'SPIDERMAN'],
                ['./img/drstrange.jpg', 'DOCTOR STRANGE'],
                ['./img/war-machine.jpg', 'WAR MACHINE'],
                ['./img/falcon.jpg', 'FALCON'],
                ['./img/antman.jpg', 'ANTMAN'],
                ['./img/capitana-marvel.jpg', 'CAPITANA MARVEL'],
                ['./img/pantera.jpg', 'PANTERA NEGRA'],
                ['./img/vision.jpg', 'VISION'],
                ['./img/wanda.jpg', 'WANDA MAXIMOF'],
                ['./img/blackwidow.jpg', 'BLACK WIDOW'],
                ['./img/hawkeye.jpg', 'HAWKEYE'],
                ['./img/hulk.jpg', 'HULK'],
                ['./img/thor.jpg', 'THOR'],
                ['./img/capitan_america.jpg', 'CAPITAN AMERICA'],
                ['./img/iron_man.jpg', 'IRON MAN']
]


const imagen1 = document.querySelector('#imagen1 img')
const imagen2 = document.querySelector('#imagen2 img')
const claseImagen = document.querySelectorAll('.imagen');
const contenedor= document.querySelector('#contenedor')
const contenedorImagen1= document.querySelector('#imagen1')
const contenedorImagen2= document.querySelector('#imagen2')

imagen1.setAttribute('src', vengador[0][0])
imagen1.setAttribute('title', vengador[0][1])
imagen2.setAttribute('src', vengador[1][0])
imagen2.setAttribute('title', vengador[1][1])


let contador = 2;
let hacerClick= true;
    
contenedor.addEventListener('click',(e)=>{

    if(hacerClick){

        if (contador < vengador.length) {
            // master
            if(e.target == imagen1){
                imagen2.style.transition= 'all 800ms'
                imagen2.style.opacity= '0'
                new Promise((resolve)=>{
                    setTimeout(()=>{
                    imagen2.setAttribute('src', vengador[contador][0])
                    imagen2.setAttribute('title', vengador[contador][1])
                    console.log('cambio de imagen');
                    resolve(imagen2)
                    contador++
                },1000)})
                .then(data=>data.style.opacity= '1')
                .then(data=>console.log('muestra de imagen'))
            }else{
                imagen1.style.transition= 'all 900ms'
                imagen1.style.opacity= '0'
                setTimeout(()=>{
                    imagen1.setAttribute('src', vengador[contador][0])
                    imagen1.setAttribute('title', vengador[contador][1])
                    imagen1.style.opacity= '1';
                    contador++
                },1000)
            }
        }
    
        else{
            if(e.target == imagen1){
                
                contenedorImagen1.style.transition= 'all 1000ms'
                contenedorImagen1.style.width = '90%';
                contenedorImagen1.style.maxHeight= '80vh'
    
                contenedor.style.justifyContent= 'center'
    
                contenedorImagen2.style.transition= 'all 700ms'
                contenedorImagen2.style.width= '0px'
                contenedorImagen2.style.opacity= '0'
    
                document.querySelector('h1').textContent= 'Tu vengador favorito es '+imagen1.getAttribute('title')
    
            }
    
            else{
                contenedorImagen2.style.transition= 'all 1000ms'
                contenedorImagen2.style.width = '90%';
                contenedorImagen2.style.maxHeight= '80vh'
                
                contenedor.style.justifyContent= 'center'
    
                contenedorImagen1.style.transition= 'all 700ms'
                contenedorImagen1.style.width= '0px'
                contenedorImagen1.style.opacity= '0'
    
                document.querySelector('h1').textContent= 'Tu vengador favorito es '+imagen2.getAttribute('title')
            }
        }
        hacerClick= false;
        setTimeout(()=>{
            hacerClick= true
        },1500)
    }
})
