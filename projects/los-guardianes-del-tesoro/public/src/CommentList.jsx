import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc, getDocs } from "firebase/firestore";
import { db } from './firebase.js'
import { FaStar } from 'react-icons/fa'

const StarRating = ({stars}) => {
    return (
        <>
            {[...Array(stars)].map((star,index) => (
                <FaStar
                key={index}
                color="gold"
                />
            ))}
        </>
    )
}

const CommentList = () => {
    const [comments, setComments] = useState([]) // aca se guarda la lista de comentarios

    const fetchComments = async () => {
        const querySnapshot = await getDocs(collection(db, "comments"));
            const newComments = []
            querySnapshot.forEach((doc) => {
                newComments.push(doc.data())
            })
            setComments(newComments)
        }
    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <div className="div-comentarios">
            {comments.length === 0 
            ? (<p>No hay coments</p>)
            : (<div>
                {comments.map((dato,index) => (
                    <div key={index} className='comentario'>
                    <p>
                        {dato.name} <StarRating stars={dato.rating}/>
                    </p>
                    <div>
                        {dato.comment}
                    </div>
                </div>
                ))}
            </div>)
        }
        </div>
    )
}

export default CommentList