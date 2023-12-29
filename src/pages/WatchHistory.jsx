import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import { deleteVideoHistory, getAllHistory } from '../allAPI';
import { FaRegTrashCan } from "react-icons/fa6";
function WatchHistory() {

const[history,setHistory]=useState([])


  const allHistory=async()=>{
   const {data}= await getAllHistory()
   console.log(data);
    setHistory(data)
  }
  console.log(history)



  const removeHistory=async(id)=>{
    await deleteVideoHistory(id)
    //to get the remaining history
    allHistory()

  }


  useEffect(()=>{
    allHistory()
  },[])
  return (
    <>
    <div className="container mt-5 d-flex justify-content-between">
      <h3>Watch History</h3>
        <Link to={'/home'} className='d-flex align-items-center' style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}><IoMdArrowRoundBack />Back To Home</Link>
    </div>
    <table className='table table-bordered border-secondary mt-5 mb-5 container text-light'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URl</th>
          <th>Time Stamp</th>
            <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {history.length>0?  
      history.map((item,index)=>(
        <tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td>
            <a href={`${item.embedLink}?autoplay=1`} target="_blank">{item.embedLink}</a>
          </td>
          <td>{item.timestamp}</td>
          <td><button onClick={()=>removeHistory(item?.id)} className='btn btn-danger ms-2'><FaRegTrashCan /></button></td>
        </tr>
      ))
    
        :<p className='fw-bolder mt-5 fs-4 text-danger text-center'>No Watch History</p>}
      </tbody>
    </table>
    </>
  )
}

export default WatchHistory