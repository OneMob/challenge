import axios from 'axios'
import { IMAGES_URL } from '../constants'

export const fetchImages = () => axios.get(IMAGES_URL)

export const postImage = (image) => {
  const formData = new FormData();
  formData.append("file", image);
  return axios.post(IMAGES_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const deleteImage = (id) => axios.delete(`${IMAGES_URL}/${id}`)