import imgPortada from './assets/portada-comic-estirada.webp'
import imgAlex from './assets/personaje1-removebg-preview.webp'
import imgEmma from './assets/personaje2-removebg-preview.webp'
// import imgLeon from './assets/leon-removebg-preview.webp'
import mockupComic from './assets/comic-blanco.png'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'
import CommentList from './CommentList'
import CommentForm from './FormComponent'

import './App.css'

function ButtonPortada({children, direccion}) {
  return (
    <a href={direccion}>
      <button className='button-portada'>
        {children}
      </button>
    </a>
  )
}

function Comentarios({comentario, name, valoracion}) {
  return (
    <div className='comentario'>
      <p>
        {name} {valoracion}
      </p>
      <div>
        {comentario}
      </div>
    </div>
  )
}

function App() {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  return (
    <>
      <nav>
        <ul>
          <li className="classNav"><a href="#id-personajes">Personajes</a></li>
          <li className="classNav"><a href="#id-historia">Historia</a></li>
          <li className="classNav"><a href="#id-comentarios">Comentarios</a></li>
          <li className="classNav"><a href="#id-footer">Contacto</a></li>
        </ul>
      </nav>

      <header>
        <img className='imgPortada' src={imgPortada} alt="Portada Historieta" />
        <div className='div-portada'>
          <h1>LOS GUARDIANES <br/> DEL TESORO</h1>
          <ButtonPortada direccion={'#id-personajes'}>
            Personajes
          </ButtonPortada>
          <ButtonPortada direccion={'#id-historia'}>
            Historia
          </ButtonPortada>
        </div>
        <div className='difuso'></div>
      </header>

      <section id='id-personajes' className='section-personajes'>
        <h2>Personajes</h2>
        <div className='div-personajes'>
          <div className='personajes'>
            <img src={imgAlex} alt="Personaje Alex" />  
            <p>Alex</p>
            <div className='difusoo'></div>
          </div>
          <div className='personajes'>
            <img src={imgEmma} alt="Personaje Emma" />  
            <p>Emma</p>
            <div className='difusoo'></div>
          </div>
          
        </div>
      </section>

      <section id='id-historia' className='section-historieta'>
        <img src={mockupComic} alt="Historieta" />
      </section>

      <section id='id-comentarios' className='section-comentarios'>
        <CommentForm/>

        <CommentList></CommentList>
      </section>

      <footer id='id-footer'>
        <p>Martina Ayala</p>
        <a href="https://www.instagram.com/_martinaayala?igsh=MWF5Mzl5a2dseGk0bQ==">
        <svg className='svg' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#fff"/>
        <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#fff"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#fff"/>
        </svg>
        </a>
      </footer>
    </>
  )
}



export default App
