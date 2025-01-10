
const d = document;
const nave = () => {
  const movil = d.getElementById("menumovil") , close = d.getElementById('close')
  links = d.querySelectorAll('.link');
  const lista = d.querySelector(".listamenu");
  movil.addEventListener("click", () => {
    lista.classList.toggle("activa");
    d.querySelector('.logolista').classList.add('logoactivo')
  });
  close.addEventListener("click", () => {
    lista.classList.remove("activa");
    d.querySelector('.logolista').classList.remove('logoactivo')

    
    
  });
  
 links.forEach((link)=>{
 link.addEventListener('click', ()=>{
 lista.classList.remove('activa')
 })
    })


};

const imagenes = [
  {
    img: "./Imagenes/05.jpg",
    title: "Autos",
  },
  {
    img: "./Imagenes/01.jpg",
    title: "Remeras",
  },
  {
    img: "./Imagenes/02.jpg",
    title: "Gente",
  },
  {
    img: "./Imagenes/03.jpg",
    title: "paisajes",
  },
  {
    img: "./Imagenes/09.jpg",
    title: "paisajes",
  },
  {
    img: "./Imagenes/10.jpg",
    title: "Autos",
  },
  {
    img: "./Imagenes/07.jpg",
    title: "Autos",
  },
];

const galeria = () => {
  const fotos = d.getElementById("my-gallery");
  imagenes.forEach((foto) => {
    fotos.innerHTML += `
        <figure class="foto">
  <a
      href="${foto.img}"
      data-pswp-width="450"
      data-pswp-height="450"
      target="_blank"
    >
      <img
        src="${foto.img}"
        alt="${foto.title}"
      class="fotoimg filtro"/>
    </a>
        
    </figure>`;
  });
  const galerias = d.getElementById("galeria");
  galerias.appendChild(fotos);
};

const filtros = () => {
  const btns = d.querySelectorAll(".btns input"),
    fotos = d.querySelectorAll("#my-gallery img");

  fotos.forEach((foto) => {
    btns.forEach((btn) => {
      btn.setAttribute("class", "btn");
      btn.addEventListener("click", () => {
        if (foto.alt == btn.value) {
          d.querySelector("#my-gallery").classList.add("fotosfiltros");
          foto.classList.remove("fotofiltro");
          foto.classList.add("filtro");
        } else {
          foto.classList.add("fotofiltro");
          foto.classList.remove("filtro");
        }  
        
        
      });
    });
  });
imagenes.filter( img => {

console.log(
  img.title === 'Gente'

) 
})
};
const scroll = () =>{
   const scroll = document.getElementById('scroll');
   scroll.setAttribute('class' , 'scroll');
    scroll.addEventListener( 'click' , ()=>{
    window.scrollTo({
    top : 0,
    behavior:'smooth'
    });
  });
d.addEventListener('scroll', ()=>{
  (this.scrollY >= 220)?scroll.classList.add('visible'): scroll.classList.remove('visible');
    
})



}
const animacion = ()=>{
    ScrollReveal();
   ScrollReveal().reveal('.listamenu',{ duration: 4000, origin: 'bottom' , distance: '-120px' })
   ScrollReveal().reveal('.titleLogo' , {duration: 4000, origen: 'rigth' , distance:'-150px' })
   ScrollReveal().reveal('.galeria' , {duration:  3000, origen: 'top' , distance: '300px' })
   ScrollReveal().reveal('.equipo' , {duration: 4000, origen: 'rigth'})
   ScrollReveal().reveal('.infonosotros' , {duration: 4000, origen: 'left' , distancia:'200px'
    });



 
} 
// const news =  async () =>{
// const url = 'https://picsum.photos/v2/list';
// const options = {
// 	method: 'GET',
// 	headers: {
		
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// }

d.addEventListener("DOMContentLoaded", () => {
  nave();
   galeria();
   filtros();
 scroll();
   animacion();
  // news();


});
