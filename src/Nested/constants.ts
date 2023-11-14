import { Comment } from "./Comments.types";

export const comments: Comment[] = [
  {
    id: 1,
    text: "Example comment here",
    author: "user2",
    children: [
      {
        id: 2,
        text: "Another example comment text",
        author: "user3",
        children: [
          {
            id: 3,
            text: "Another example comment text",
            author: "user4",
            children: [
              {
                id: 3.1,
                text: "Another example comment text",
                author: "user3.1",
                children: [],
              },
              {
                id: 3.2,
                text: "Another example comment text",
                author: "user3.2",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    text: "Example comment here",
    author: "user5",
    children: [],
  },
];
