import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Trash } from 'react-bootstrap-icons';
import { deleteImage } from '../container/actions/index';
import './image.scss';

const Images = ({ data, setImages }) => {
  const handleDelete = (id) => {
    const confirmDeletion = confirm("Are you sure you want to delete this image?");
    if ( confirmDeletion == true ) {
      deleteImage(id, data, setImages);
    }
  }

  return (
    <Container>
      <h4>List of Uploaded Images</h4>
      <Table striped bordered hover variant="dark" responsive="sm">
        <thead>
          <tr>
            <th>Image</th>
            <th>MIME Type</th>
            <th>Size</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.image?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={item.location} alt="Item Image" />
                  </td>
                  <td >{item.mime_type}</td>
                  <td >{item.size} KB</td>
                  <td className="delete">
                    <Trash color="white" size={20} onClick={() => handleDelete(item.id)} />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Container>
  )
}

export default Images;
