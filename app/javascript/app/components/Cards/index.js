import React from 'react'
import Card from './Card'

function Cards({images, removeImage}) {
  console.log(images)
  console.log('length', images.length)

  return (
    <div className="row">
      {images.map((image, index) =>
        <div key={index} className="col-sm-4">
          <Card image={image} removeImage={removeImage}/>
        </div>)}
    </div>
  )
}

export default Cards;
