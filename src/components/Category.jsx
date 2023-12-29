import React, { useEffect } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

import { useState } from "react";
import FormLabel from 'react-bootstrap/esm/FormLabel';
import { addAllCategory, deleteCategory, getAVideo, getAllCategories, updateCategory } from '../allAPI';
import { ToastContainer, toast } from 'react-toastify';
import { FaRegTrashCan } from "react-icons/fa6";
import { Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';

function Category() {
  /* modal */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  /* modal */
  /* State to store category name */
  const [categoryName, setCategoryName] = useState("")

  const [category, setCategory] = useState([])

  //function to add vategopry
  const addCategory = async () => {
    console.log(categoryName);
    if (categoryName) {
      let body = {
        categoryName,
        allVideos: []
      }
      const response = await addAllCategory(body)
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        toast.success('Added Successfully!')
        setCategoryName("")
        handleClose()
        //to get category without reloading
        allCategory()


      }
      else {
        toast.error('Something went wrong')
      }

    }
    else {
      toast.warning('Enter Category Name')
    }

  }
  //to get category
  const allCategory = async () => {
    const { data } = await getAllCategories()
    setCategory(data)

  }
  console.log(category);


  //delete category
  const deleteACategory=async(id)=>{
    await deleteCategory(id)
    //to get remaining category
    allCategory()


  }

  //function to preevent reload
  const dragOver=(e)=>{
    e.preventDefault()

  }

  const videoDrop=async(e,categoryId)=>{
    console.log(`dropped on Category Id: ${categoryId}`);
    //to get data send form video card
   let videoId= e.dataTransfer.getData("videoID")
   console.log(videoId);
   const {data}=await getAVideo(videoId)
   console.log(data);
   const selectedCategory=category.find(item=>item.id===categoryId)
   selectedCategory.allVideos.push(data)
   console.log(selectedCategory);

    await updateCategory(categoryId,selectedCategory)
    allCategory()
  }

  useEffect(() => {
    allCategory()
  }, [])



  /* State to store category name */
  return (
    <>
      <div className='d-grid ms-3'>
        <button onClick={handleShow} className='btn btn-warning'>Add New Category</button>
      </div>


      {category?.length > 0 ? (
        category?.map((item) => (
          <div key={item.id} class='p-3 m-5 border border-secondary rounded'> {/* Assuming `item` has a unique `id` property */}
            <div class='d-flex justify-content-between align-items-center' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
              <h6>{item.categoryName}</h6>
              <button class='btn btn-danger' onClick={()=>deleteACategory(item?.id)}>
                <FaRegTrashCan size={30} />
              </button>
            </div>
            <Row>
              <Col>
              {item?.allVideos?.length>0?
                  item?.allVideos?.map((card) => (<VideoCard displayVideo={card} isPresent={true} cat={item} />))
             :<p>Nothing to display</p>}
              </Col>
            </Row>
          </div>
        ))
      ) : (
        <p className='m-3 fw-bolder fs-5 text-danger text-center'>No Category Added</p>
      )}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="border border-secondary p-3 rounded">
           

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FormLabel>Category Name</FormLabel>
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e => setCategoryName(e.target.value))}/>
            </Form.Group>


          


          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={addCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
   </>
  )
}

export default Category