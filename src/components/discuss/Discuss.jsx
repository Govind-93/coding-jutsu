import "./discuss.scss";
import React, { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { queries } from "./data";
import Query from "./components/Query";
import Discussion from "./components/Discussion";
import SearchBar from "../searchBar/SearchBar";
import MyImage from '../../assets/me.jpeg'

function Discuss() {



  const DiscussLayout = () => {

  const [selectedImage, setSelectedImage] = useState();
  const refPostContent = useRef('');

  const handleSelectedImage = (e)=>{
      setSelectedImage(e.target.files[0]);
  }

  const removeSelectedImage = ()=>{
    setSelectedImage();
  }

    return (<div className="discuss">
      
        <SearchBar
          items={queries}
          getKey={(q) => q.question}
          path={(q) => `/discuss/${q.id}`}
          placeholder={"Search here..."}
        />
        <div className="new-doubt">
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
              <div className="button add__post">
               Post
              </div>
            </div>
          </div>
        </div>
        </div>
        

      
      <div className="queries">
        {queries.map((x) => (
          <Query {...x} description={null} />
        ))}
      </div>
      <div className="post__doubt">
        <i class="uil uil-plus-circle"></i>
      </div>
      
    </div>);
  }

  return (
    <Routes>
      <Route path="/" element={<DiscussLayout />} />
      <Route path="/:discussionLink" element={<Discussion />} />
    </Routes>
  );
}

export default Discuss;
