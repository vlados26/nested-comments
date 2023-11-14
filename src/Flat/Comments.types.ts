export type Comment = {
  id: number;
  text: string;
  author: string;
  parentId: number | null;
};

export type IComments = ({
  comments,
}: {
  comments: Comment[];
}) => JSX.Element[];

export type IComment = ({ comment }: { comment: Comment }) => JSX.Element;

export type IuseCommentsByParentId = () => GetNestedComments;

export type GetNestedComments = (id: number) => Comment[] | [];

export type CommentsByParentId = {
  [key: string]: Comment[];
};
