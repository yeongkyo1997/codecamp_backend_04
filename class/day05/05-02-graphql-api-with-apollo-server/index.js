import { ApolloServer, gql } from "apollo-server";
// The GraphQL schema
const typeDefs = gql`
  type Query {
    aaa: String
  }
`;

// A map of functions which return data for the schema.
// API 선언
const resolvers = {
  Query: {
    aaa: () => "Hello World! 반가워요!", // aaa라는 api 만들기
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3000).then(() => {
  console.log("프로그램을 켜는데 성공했습니다!!!");
});
