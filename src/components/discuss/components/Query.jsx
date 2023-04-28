import userLogo from "../assets/user-circle.svg";
import eyeIcon from "../assets/eye.svg";
import likeIcon from "../assets/like.svg";
import commentIcon from "../assets/comment.svg";
import { useNavigate } from "react-router-dom";
import Article from "../../article/Article";
import "./query.css";

function Query({
  question,
  description,
  posterName,
  posterPic,
  upvotes,
  responseCount,
  views,
  datetime,
  tags,
  id,
}) {
  const date = new Date(datetime);

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][date.getMonth()];

  const year = date.getFullYear();

  const dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][date.getDay()];

  const day = date.getDate();
  const daySuf = ((d) => {
    if (d % 20 == 1) {
      return "st";
    }
    if (d % 20 == 2) {
      return "nd";
    }
    if (d % 20 == 3) {
      return "rd";
    }
    return "th";
  })(day);

  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const navigate = useNavigate();

  return (
    <div
      className="query"
      onClick={() => {
        if (id) {
          navigate(`/discuss/${id}`);
        }
      }}
    >
      <h6 className="datetime">
        {dayName}, {day}
        <sup>{daySuf}</sup> {month} {year}, {time}
      </h6>
      {question && <h3 className="query-question">{question}</h3>}
      {description && <Article>{description}</Article>}
      {tags && (
        <div className="tags">
          {tags.map((tag) => (
            <span className="tag">{tag}</span>
          ))}
        </div>
      )}
      <div className="query-bottom-container">
        {upvotes && (
          <div className="query-upvotes">
            <img className="query-icon" src={likeIcon} alt="" />
            <span>{upvotes}</span>
          </div>
        )}
        {views && (
          <div className="query-views">
            <img className="query-icon" src={eyeIcon} alt="" />
            <span>{views}</span>
          </div>
        )}
        {responseCount && (
          <div className="query-responses">
            <img className="query-icon" src={commentIcon} alt="" />
            <span>{responseCount}</span>
          </div>
        )}
        <div className="poster">
          <h3 className="poster-name">{posterName}</h3>
          <img
            className={`poster-pic ${posterPic ? "" : "poster-pic-def"}`}
            src={posterPic || userLogo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Query;
