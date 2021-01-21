import React from 'react'
import './card.scss'

const Card = ({ image, removeImage }) => {
  return (

    <div className="card bg-light">
      <img className="card-img-top" src={`${image.url}`} alt={image.filename}  />
        <div className="card-body">
        <p className="card-text"><strong>File Name:</strong> {image.filename}</p>
        <p className="card-text"><strong>File Size:</strong> {image.byte_size} Bytes</p>
        <p className="card-text"><strong>File Type:</strong> {image.content_type}</p>
          <button 
            onClick={() => removeImage(image.id)} 
            className="float-right btn btn-sm btn-danger d-inline-flex btn-close" 
            aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
        </div>
    </div>
  )
}

export default Card