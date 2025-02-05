import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  input CreateBoardInput {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type MyResult {
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [MyResult]
  }

  type Mutation {
    createBoard(createBoardInput: CreateBoardInput!): String
  }
`;

const resolvers = {
  Query: {
    fetchBoards: (parent, args, context, info) => {
      const result = [{ number: 1, writer: "철수", title: "제목입니다~~~" }];
      return result;
    },
  },
  Mutation: {
    createBoard: (_, args) => {
      console.log(args.createBoardInput.writer);
      console.log(args.createBoardInput.title);
      console.log(args.createBoardInput.contents);

      return "게시물 등록에 성공하였습니다.";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server);
