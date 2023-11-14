export type Comment = {
  id: number;
  text: string;
  author: string;
  children: Comment[];
};

export type IComments = () => JSX.Element[];

export type IComment = ({ comment }: { comment: Comment }) => JSX.Element;
