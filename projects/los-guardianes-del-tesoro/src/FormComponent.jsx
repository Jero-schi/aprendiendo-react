import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from './firebase.js'
import { FaStar } from 'react-icons/fa'
import CommentList from "./CommentList.jsx";


const CommentForm = ({fetchComment}) => {
	const [name, setName] = useState('') // estado para el nombre
	const [comment, setComment] = useState('') // estado para el comentario
	const [rating, setRating] = useState(null) // estados para las estrellas
	const [hover, setHover] = useState(null)

	const handleSubmit = async (e) => { // esto se ejecuta al darle enviar
		console.log('Si, enviaste el comentario');
		e.preventDefault();

		const docRef = await addDoc(collection(db, "comments"), {
			name: name,
			rating: rating,
			comment: comment
		});

		setName('')
		setRating(null)
		setComment('')
		window.location.reload();
	}

	return (
		<form onSubmit={handleSubmit} className='form-comentarios'>
			<h3>Deja tu comentario</h3>

			<div className='div-form'>
				<p>Nombre</p>
				<textarea
					id="username"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Tu nombre"
					required
				/>
			</div>

			<div className='div-form'>
				<p>Valoracion</p>
				<div className='rating'>
					{[...Array(5)].map((star,index) =>{
						const currentRating = index+1
						return (
							<label key={index}>
								<input
									key={index+12}
									type="radio" 
									name='rating' 
									value={currentRating}
									onClick={() => setRating(currentRating)}
									/>
								<FaStar
									onMouseEnter={() => setHover(currentRating)}
									onMouseLeave={() => setHover(null)}
									key={index}
									className='star'
									color={ currentRating <= (hover || rating) ? 'yellow' : 'grey'}
								/>
							</label>
					)
					})}
				</div>
			</div>

			<div className='div-form'>
				<p>Comentario</p>
				<textarea
					id="comment"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					placeholder="Tu comentario"
					required
				/>
			</div>

			<button type="submit">Enviar</button>
		</form>
	)
}

export default CommentForm