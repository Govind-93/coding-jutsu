import React, {useState } from 'react'
import './feeds.scss'
import MyImage from '../../assets/me.jpeg'
import Post from '../post/Post'
import {PostData} from './../../data'


const Feeds = () => {

  const [postsData,setpPostsData] = useState(PostData);

  // const handleScroll = ()=>{
  //   if (window.innerHeight + document.documentElement.scrollTop
  //     === document.documentElement.offsetHeight){
  //       console.log("Bottom is reached")
  //       setpPostsData((data)=>{
  //         return [...data,...PostData];
  //       }) 
  //     }
     
  // }

  // useEffect(()=>{
  //   window.addEventListener('scroll',handleScroll);
  //   return ()=>{
  //     window.removeEventListener('scroll',handleScroll);
  //   }
  // })
  
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
              <textarea nam="" id="" cols="0" rows="1" className="contact__input post__data" placeholder='Share your achievement/experience'></textarea>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <div className="button add__photo">
                <i className="uil uil-camera-plus"></i> Add Photo
              </div>
              <div className="button add__video">
                <i className="uil uil-video"></i> Add Video
              </div>
            </div>
            <div className="right">
              <div className="button add__post">
              {/* <i className="uil uil-plus"></i>Post */}Post
              </div>
            </div>
          </div>
        </div>

        {
          postsData.map((post)=>{
            return <Post data={post}></Post>
          })
        }
  
        
      </div>
    </div>
  )
}

export default Feeds
