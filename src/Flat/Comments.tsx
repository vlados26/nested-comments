import { IComment, IComments } from "./Comments.types";
import { useCommentsByParentId } from "./useCommentsByParentId.hook";

const Comment: IComment = ({ comment }) => {
  const getNestedComments = useCommentsByParentId();

  const nestedComments = getNestedComments(comment.id);

  return (
    <div className="comment">
      <div>
        <b>{comment.id}</b>: {comment.text}
      </div>
      {nestedComments.length > 0 && <Comments comments={nestedComments} />}
    </div>
  );
};

const Comments: IComments = ({ comments }) => {
  return comments.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));
};

export default Comments;
