# What's this?  

This is a simple Apollo Gateway app that federates the Customer subgraph with the Cart subgraph. It also resolves the the `carts` subfield of the Customer object using the Cart app.  
The Cart and Customer apps need to be running for this app to work properly.  
The intention behind it is to test [Apollo federation](https://www.apollographql.com/docs/federation/ "Introduction to Apollo Federation").  
To start the app, simply run `npm install` and then `node index.js`.
