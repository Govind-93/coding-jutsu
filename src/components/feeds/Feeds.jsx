import React, { useRef, useState } from 'react'
import './feeds.scss'
import MyImage from '../../assets/me.jpeg'
import Post from '../post/Post'
import {PostData} from './../../data'


const Feeds = () => {

  const [selectedImage, setSelectedImage] = useState();
  const refPostContent = useRef('');

  const handleSelectedImage = (e)=>{
      setSelectedImage(e.target.files[0]);
  }

  const removeSelectedImage = ()=>{
    setSelectedImage();
  }

  const uploadPost = ()=>{
      const post = {
        id:8,
        user_name:"Govind Sharma",
        user_profile: {MyImage},
        post_desc : refPostContent.current.value,
        post_img: URL.createObjectURL(selectedImage) ,
        post_like : 0,
        post_comments: []
      }
      console.log(post);
      PostData.push(post);
      setSelectedImage();
      refPostContent.current.value='';
  }
  
  return (
    <div className='feeds__container'>
      <div className="feeds">

        <div className="post__feed card">
          <div className="top">
            <div className="left">
              <img src={MyImage} alt="user_image" />
              <span>Govind Sharma (you)</span>
            </div>
            <div className="right">
            <i className="uil uil-ellipsis-h"></i>
            </div>
          </div>
          <div className="mid">
          <div className="input__container text-area">
              <textarea ref={refPostContent} nam="" id="" cols="0" rows="3" className="contact__input post__data" placeholder='Share your achievement/experience'></textarea>
              <input id='upload-photo' type="file" onChange={handleSelectedImage} style={{display:"none"}}></input>
              {
                selectedImage && <div className="selected__image-container" onClick={removeSelectedImage} ><i class="uil uil-times remove__selected-image"></i><img className='selected__image' src={URL.createObjectURL(selectedImage)} alt="preview"  /> </div> 
              }
          </div>
          
          </div>
          <div className="bottom">
            <div className="left">
             
              <label htmlFor="upload-photo">
              <div className="button add__photo"  >
              <i className="uil uil-camera-plus"></i> Add Photo 
              </div>
              </label>
              <label htmlFor="upload-photo">
              <div className="button add__video">
               <i className="uil uil-video"></i> Add Video
              </div>
              </label>
            </div>
            <div className="right">
              <div className="button add__post" onClick={uploadPost}>
               Post
              </div>
            </div>
          </div>
        </div>

        {
          PostData.map((post)=>{
            return <Post data={post}></Post>
          })
        }
  
        
      </div>
    </div>
  )
}

export default Feeds
