import "./discussion.css";
import { useParams } from "react-router-dom";
import { queries, discussion } from "../data";
import Query from "./Query";

function Discussion() {
  const { discussionLink: id } = useParams();
  const query = {
    ...queries.find((x) => {
      return x.id === id;
    }),
  };

  const responses = discussion.find((x) => {
    return x.id === id;
  })?.responses;

  return (
    <div className="discussion">
      <Query {...query} />
      <div className="answer">Answers</div>
      {responses ?
        responses.map((x) => (
          <Query
            description={x.text}
            posterName={x.responderName}
            posterPic={x.responderPic}
            upvotes={x.upvotes}
            datetime={x.datetime}
          />
        )) :
        <div className="no-answer">Not Answered Yet!</div>
      }
    </div>
  );
}

export default Discussion;
