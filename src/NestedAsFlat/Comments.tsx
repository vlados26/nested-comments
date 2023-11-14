import { IComment, IComments } from "./Comments.types";

const Comment: IComment = ({ comment }) => {
  return (
    <div className="comment">
      <div>
        <b>{comment.id}</b>: {comment.text}
      </div>
      {comment.children.length > 0 && <Comments comments={comment.children} />}
    </div>
  );
};

const Comments: IComments = ({ comments }) => {
  return comments.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));
};

export default Comments;
