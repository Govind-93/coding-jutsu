import React, { useState } from 'react'
import './post.scss'
import DefaultUser from './../../assets/default_user.png'
import Like from './../../assets/like.png'
import LikeFilled from './../../assets/like_filled.png'
import MyImage from '../../assets/me.jpeg'


const Post = ({data}) => {
  let {user_name,post_like,post_desc,post_img,post_comments} = {...data};
  const [comment,setComment] = useState('');
  const [isLiked,setIsLiked] = useState(false);
  const [showComments,setShowComments] = useState(false);

  const handleLikeButton = ()=>{
      setIsLiked(!isLiked);
  }

  const handleCommentBtnClick = ()=>{
    setShowComments(!showComments);
  }

  const postComment = (e)=>{
      e.preventDefault();
      if(comment.length <=0 ) {
        alert("Please type something in comment before posting")
        return ;
      }
     post_comments.push({
      comment_id: new Date().getTime().toString(),
      commented_by: "Govind Sharma",
      comment_time: "now",
      comment_desc: comment
    })
    console.log(post_comments)
    setComment("");
  }

  

  return (
    <div className="post card">
          <div className="top">
            <div className="left">
              <img src={DefaultUser} alt="user_image" />
              <div>
              <span className='user__name'>{user_name}</span>
              <span className='post__time'>5 min ago</span>
              </div>
            </div>
            <div className="right">
            <i className="uil uil-ellipsis-h"></i>
            </div>
          </div>

          <div className="mid">
            <p className='post__description'>{post_desc}</p>
            <img src={post_img} className='post__img' alt="" />
          </div>

          <div className="bottom">
            
              <div className="left">
                  <div className="like__btn button">
                      <img src={isLiked ? LikeFilled : Like} alt="" onClick={handleLikeButton}/> {isLiked ? post_like+1 : post_like} likes
                  </div>
                  <div className="comment__btn button" onClick={handleCommentBtnClick}>
                      <i className="uil uil-comment-alt-lines"></i>{post_comments.length} comments
                  </div>
              </div>

              <div className="right">
                  <div className="share__btn button">
                      <i className="uil uil-share-alt"></i>
                  </div>
              </div>

          </div>

          <div className={`comments__container ${showComments ? "" : "hide__comments"}`}>
           
            <div className="add__comment">
            <img src={MyImage} alt="user_image" />
            <div className="input__container">
              <input className='inputs' value={comment} onChange = {(e)=> setComment(e.target.value)}  type="text" placeholder='Add a comment...'/>
            </div>
            <button className='send__comment__btn' onClick={postComment} ><i className="uil uil-message"></i></button>
            </div>

            {
              post_comments.map((comment)=>{
                return ( <div className="comment">
                <img src={DefaultUser} alt="user_image" />
                <div className="comment__container">
                  <div className="comment__info">
                     <span className='commented__by'>{comment.commented_by}</span>
                     <span className='comment__time'>{comment.comment_time}</span>
                  </div>
                  
                  <p className="comment__desc">{comment.comment_desc}</p>
                </div>
              </div> )
              })
            }

           

          </div>

        </div>
  )
}

export default Post
