# What's this?  

This is a simple NestJS app that uses Apollo GraphQL server to query Commercetools Customer object using Commercetools GraphQL. It also adds a subfield to the Customer object called `carts` that lists all carts relating to the said customer.  
The gateway needs to be running for the `carts` subfield to be available inside a Customer object.  
The intention behind it is to test [Apollo federation](https://www.apollographql.com/docs/federation/ "Introduction to Apollo Federation").  
This is writted in the schema-first approach, but it can also be done in code-first approach.  
To start the app, simply run `npm install` and then `npm start:dev`.
