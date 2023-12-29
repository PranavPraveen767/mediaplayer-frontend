import React from "react";
import {IoCloudUpload} from "react-icons/io5";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import { uploadVideo } from "../allAPI";
/* react toastify */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* Reat Toastify */
function Add({ setUploadVideoStatus }) {
  /* Moadl */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  /* Modal */
/*  State for input fields */
const[videos,setVideos]=useState({
  id:"",
  caption:"",
  url:"",
  embedLink:""
})


  const embedVideoLink=(e)=>{
    const {value}=e.target
    console.log(value.slice(-11));
    const link =`http://www.youtube.com/embed/${value.slice(-11)}`
    setVideos({...videos,embedLink:link})
  }
console.log(videos);
/*  State for input fields */

/* API call */
  const handleUpload=async()=>{
    const { id, caption, url, embedLink }=videos
    if (!id || !caption || !url || !embedLink){
      toast.warning("Please Fill The Form Completely")
    }
    else{
     const response= await uploadVideo(videos)
     console.log(response);
     if(response.status>=200 && response.status<300){
      toast.success('Uploaded Successfully')
       setUploadVideoStatus(response.data)
      //close modal
       handleClose()
     }
     else{
      console.log(response);
      toast.error("Sometging went wrong ... Please Try Again Later")
     }
    }
  }
  return (
    <>
      <div className="d-flex align-items-center">
        <h5 className="text-light"> Upload New Video</h5>
        <button onClick={handleShow} className="btn">
          <IoCloudUpload size={30} color="white" className="ms-2" />
        </button>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="border border-secondary p-3 rounded">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Id" onChange={(e) => setVideos({ ...videos, id:e.target.value})} />
             </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter video Caption" onChange={(e) => setVideos({ ...videos, caption: e.target.value })} />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e) => setVideos({ ...videos, url: e.target.value })} />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={embedVideoLink} />
            </Form.Group>


          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={2000}/>
    </>
  );
}

export default Add;
