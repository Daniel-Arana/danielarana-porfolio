function agregaEvento(){

    document.querySelectorAll('.contenedor__corto__imgContainer img').forEach(img =>{ 
        //hago un forEach para seleccionar cada imagen

        img.onclick = () =>{
            //Asigna el pop up y lo hace block al hacer click sobre la imagen
            document.querySelector('.popup__img').style.display = 'block';
            //Toma la ruta de cada imagen seleccionada para mostrarla
            document.querySelector('.popup__img img').src = img.getAttribute('src'); 
        }
        
    } );
    
    document.querySelector('.popup__img span').onclick = () =>{
        //Al hacer click sobre el span ('cerrar') se cierra el pop (display: 'none')
        document.querySelector('.popup__img').style.display = 'none'; 
    };

}



window.onload = agregaEvento;