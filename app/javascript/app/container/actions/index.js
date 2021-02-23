import axios from "axios";
import { NotificationManager } from "react-notifications";

/**
 * This function fetch the images
 * from database via API call
 */
export const getImages = (setImages, setLoading) => {
  axios.get("/images").then((response) => {
    setImages(response.data);
    setLoading(true);
  });
};

/**
 * This function is used to POST image
 * to the database via API call
 * @param {*} formData
 */
export const postImage = (formData, images, setImages) => {
  axios.post("/images", formData).then((response) => {
    if (response.data) {
      NotificationManager.success("Image uploaded successfully");
      let updatedData = JSON.parse(JSON.stringify(images));
      updatedData.image.push(response.data.image);
      setImages(updatedData);
    } else {
      NotificationManager.warning("Error while uploading image");
    }
  });
};

/**
 * This function is used to DELETE image
 * from the database via API call
 *
 */
export const deleteImage = (id, data, setImages) => {
  axios.delete("/images/" + id).then((response) => {
    if (response.data) {
      NotificationManager.success("Image deleted successfully");
      let updatedData = JSON.parse(JSON.stringify(data));
      updatedData.image = updatedData.image.filter(
        (img) => img.id != response.data.id
      );
      setImages(updatedData);
    } else {
      NotificationManager.warning("Error while deleting image");
    }
  });
};
