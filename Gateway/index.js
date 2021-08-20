const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'customer', url: 'http://nestjs-customer-service/graphql' },
    { name: 'cart', url: 'http://nestjs-cart-service/graphql' },
  ],
});

const server = new ApolloServer({
  gateway,
});

server.listen({ port: 80 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});