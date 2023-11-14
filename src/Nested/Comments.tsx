import { IComment, IComments } from "./Comments.types";
import { comments } from "./constants";

const Comment: IComment = ({ comment }) => {
  const nestedComments = (comment.children || []).map((comment) => {
    return <Comment key={comment.id} comment={comment} />;
  });

  return (
    <div className="comment">
      <div>
        <b>{comment.id}</b>: {comment.text}
      </div>
      {nestedComments}
    </div>
  );
};

const Comments: IComments = () => {
  return comments.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));
};

export default Comments;
