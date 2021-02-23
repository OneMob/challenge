import './index.scss';
import React, { useEffect, useState } from 'react';
import { getImages, postImage } from '../container/actions/index';
import { NotificationContainer } from 'react-notifications';
import Images from './image';

export default function Hello() {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages(setImages, setLoading);
  }, []);

  const handleInput = (event) => {
    setFile(event.target.files[0]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    postImage(formData, images, setImages);
  }

  return (
    <div className="image-form">
      <form onSubmit={handleSubmit}>
        <div className="input-file">
          <label htmlFor="img">Select Your Image </label>
          <input type="file" name="file" id="img" accept="image/*" onChange={handleInput} />
        </div>
        <div className="button">
          <input className="btn btn-sm btn-primary" type="submit" />
        </div>
      </form>
      {loading ? <Images data={images} setImages={setImages} /> : <p>Loading...</p>}
      <NotificationContainer />
    </div>
  )
}
