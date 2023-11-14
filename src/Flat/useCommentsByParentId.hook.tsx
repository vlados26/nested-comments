import { useMemo } from "react";
import {
  CommentsByParentId as CommentsByParentIdType,
  GetNestedComments,
  IuseCommentsByParentId,
} from "./Comments.types";
import { comments } from "./constants";

export const useCommentsByParentId: IuseCommentsByParentId = () => {
  const commentsByParentId = useMemo(() => {
    // Another solution
    // const group = {} as CommentsByParentId;
    // comments.forEach((comment) => {
    //   group[comment.parentId!] ||= [];
    //   group[comment.parentId!].push(comment);
    // });
    // return group;

    return comments.reduce<CommentsByParentIdType>(
      (group, comment) => ({
        ...group,
        [comment.parentId!]: [...(group[comment.parentId!] || []), comment],
      }),
      {}
    );
  }, []);

  const getNestedComments: GetNestedComments = (id) => {
    return commentsByParentId[id] || [];
  };

  return getNestedComments;
};
