import React, { useState, useEffect } from 'react'
import attachments from './attachments.scss'

const ATTACHMENTS_URL = 'http://localhost:3000/attachments'

export default function Attachments() { 
  const [attachments, changeAttachments] = useState([]);
  const [file, changeFile] = useState(null);

  const onImageChange = event => { 
    changeFile(event.target.files[0]);
  };

  useEffect(() => {
    fetch(ATTACHMENTS_URL)
      .then(response => response.json())
      .then(data => changeAttachments(data));
  }, [])

  const handleSubmit = event => {
    if (file === null) {
      return alert("Please, choose file!")
    }

    const formData = new FormData();
    formData.append('file', file);
    fetch(ATTACHMENTS_URL, {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        alert("Your file is being uploaded!")
        changeAttachments(attachments.concat(data.attachment))
      })
      .catch(error=>console.log(error));
  }

  const deleteAttachment = (event) => {
    fetch(`${ATTACHMENTS_URL}/${event.target.id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => {
        alert("Your file is deleted!")
        changeAttachments(attachments.filter((a) => a.id != event.target.id))
      })
      .catch(error=>console.log(error));
  }

  return <React.Fragment>
    <div className='main'>
      <input className='input' type="file" accept="image/*" multiple={false} onChange={onImageChange}/>
      <button className='button' onClick={handleSubmit}>Upload</button>
      <ul>{attachments.map((attachment) => 
        <li className='li' key={attachment.id}>
           {attachment.title} {attachment.mime_type} {attachment.size}
          <button className='close' id={attachment.id} onClick={deleteAttachment}> x </button>
        </li>
      )}
      </ul>
    </div>
  </React.Fragment>
}
