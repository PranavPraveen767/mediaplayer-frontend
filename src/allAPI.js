import { commonAPI } from "./services/commonAPi"
import { serverURL } from "./services/serverURL"





//upload video
 export const uploadVideo=async(reqBody)=>{
  //returm the value to Add.jsx
   return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

//get all uploaded videsos
export const getAllVideos=async()=>{
  //return thevalue to view.jsx
  return await commonAPI('GET',`${serverURL}/videos`)
}

//delete video
export const deleteAVideo=async(id)=>{
  await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})//object is specified to make it understand operation is perfromed in object
}

//add history
 export const addToHistory = async (videoDetails) => {
   return await commonAPI("POST", `${serverURL}/history`, videoDetails);
 };

 //api to delete history
  export const deleteVideoHistory = async (id) => {
    return await commonAPI("DELETE", `${serverURL}/history/${id}`, {});
  };


  //api to get history
    export const getAllHistory = async () => {
      return await commonAPI("GET", `${serverURL}/history`, "");
    };



  //api to add category
  export const addAllCategory=async(body)=>{
   return await commonAPI("POST",`${serverURL}/categories`,body)
  }


   //api to get category
    export const getAllCategories = async () => {
      return await commonAPI("GET", `${serverURL}/categories`, "");
    };

    //api to delete category
     export const deleteCategory = async (id) => {
       return await commonAPI("DELETE", `${serverURL}/categories/${id}`, {});
     };
     //api to get particular video from http://localhost:7000/videos
       export const getAVideo = async (id) => {
         return await commonAPI("GET", `${serverURL}/videos/${id}`, "");
       };

       //api to update the category with new video
       export const updateCategory=async(id,body)=>{
       return await commonAPI("PUT", `${serverURL}/categories/${id}`,body);
       }

