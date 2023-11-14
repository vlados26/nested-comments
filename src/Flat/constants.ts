export const comments = [
  {
    id: 1,
    text: "Example comment here",
    author: "user2",
    parentId: null,
  },
  {
    id: 2,
    text: "Another example comment text",
    author: "user3",
    parentId: 1,
  },
  {
    id: 3,
    text: "Another example comment text",
    author: "user4",
    parentId: 2,
  },
  {
    id: 3.1,
    text: "Another example comment text",
    author: "user3.1",
    parentId: 3,
  },
  {
    id: 3.2,
    text: "Another example comment text",
    author: "user3.2",
    parentId: 3,
  },
  {
    id: 4,
    text: "Example comment here",
    author: "user5",
    parentId: null,
  },
];

export const rootComments = comments.filter((comment) => !comment.parentId);
