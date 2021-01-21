import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { doImagePost } from '../../store/actions';
import './upload.scss'

function Upload() {
  
  const dispatch = useDispatch();
  const [file, setFile] = useState({ name: '' });
  
  return (
      <div className="input-group">
        <div className="custom-file">
          <input 
            type="file" 
            className="custom-file-input" 
            id="inputGroupFile" 
            onChange={e => setFile(e.target.files[0])}
            aria-describedby="inputGroupFileAddon" />

          <label className="custom-file-label" htmlFor="inputGroupFile">
            {file.name ? file.name : "Choose file"}
          </label>
        
        </div>
        <div className="input-group-append">
          <button 
            className="btn btn-outline-secondary" 
            type="button" 
            id="inputGroupFileAddon"
            onClick={() => dispatch(doImagePost(file))}
          >  
            Upload
          </button>
        </div>
      </div>
  )
}

export default Upload
