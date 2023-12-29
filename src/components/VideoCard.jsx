import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { FaRegTrashCan } from "react-icons/fa6";

import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addToHistory, deleteAVideo, getAllCategories, updateCategory } from '../allAPI';


function VideoCard({ displayVideo, setDeleteVideoStatus,isPresent,cat }) {
  const [category, setCategory] = useState([])

  /* modal */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)
    const { caption, embedLink } = displayVideo
     let today = new Date()
    console.log(today);
    let timestamp = new Intl.DateTimeFormat("en-GB", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(today)
    console.log(today);
    let videoDetails={
      caption,embedLink,timestamp
    }
    await addToHistory(videoDetails)

  }
  const allCategory = async () => {
    const { data } = await getAllCategories()
    setCategory(data)
  }
  //console.log(category);
  /* modal */
  const removeCatVideo = async(id, catid) => {
    console.log(id, catid);
    const selectedCategory=category.find((item)=>item.id===catid)
    //console.log(selectedCategory);
    const selectedArray = selectedCategory.allVideos
    const index = selectedArray.find((item)=>item.id===id)
    const indexValue = selectedArray.indexOf(index)
    selectedCategory.allVideos.splice(indexValue,1)
    await updateCategory(catid,selectedCategory)
    allCategory()


  }

  /* delete video */
  const removeVideo = async (id) => {
    const response = await deleteAVideo(id)
    setDeleteVideoStatus(true)
  }
  /* delete video */
  /* drag */
  const cardDrag=(e,id)=>{
    console.log(`The id of video card is ${id}`);
    e.dataTransfer.setData("videoID",id)//prewritten
  }

  useEffect(()=>{
   allCategory()

  },[])



  /* drag */
  return (
    <>
      <Card style={{ width: '100%', height: '280px' }} className='mb-3' draggable onDragStart={(e=>cardDrag(e,displayVideo?.id))}>
        <Card.Img onClick={handleShow} variant="top" src={displayVideo.url} height={'250px'} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <h6 className='text-light'> {displayVideo.caption} </h6>
            {!isPresent?
              <button onClick={() => removeVideo(displayVideo?.id)} className='btn btn-danger'><FaRegTrashCan /></button>:
              <button onClick={()=>removeCatVideo(displayVideo?.id,cat?.id)} className='btn btn-warning'><FaRegTrashCan /></button>
              }
          </Card.Title>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="680" src={`${displayVideo.embedLink}?autoplay=1`} title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Modal.Body>

      </Modal>
    </>
  )
}

export default VideoCard