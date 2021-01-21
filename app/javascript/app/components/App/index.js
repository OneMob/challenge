import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doImagePost, doImageDelete, doImagesFetch } from '../../store/actions';

import Header from '../Header'
import Upload from '../Upload'
import Cards from '../Cards'
import Alert from '../Alert'
import './app.scss';


function App() {
  
  let dispatch = useDispatch()
  // In case of any errors from the server we can use the error viariable to
  // show visual cues
  let {images, isImageAdded, error} = useSelector( state => state.imagesState );
  const [alertVisible, setAlertVisible] = useState(false)

  useEffect(() => {
    dispatch(doImagesFetch())
  }, [])

  useEffect(() => {
    if (isImageAdded) {
      setAlertVisible(true)
      setTimeout(() => {
        setAlertVisible(false)
      }, 2000);
    }
  }, [isImageAdded])

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Upload />
        <Alert show={alertVisible} variant={"success"}>
          Image successfully added
        </Alert>
        {/* We could even move images prop into the Cards Component */}
        <Cards images={ images } /> 
      </div>
    </div>
  )
}

export default App
