const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const typeDefs = require('./schema');

dotenv.config();

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({ typeDefs });

  await server.start();
  server.applyMiddleware({ app });

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
    app.listen({ port: process.env.PORT || 4000 }, () => {
      console.log(`Server ready at http://localhost:${process.env.PORT || 4000}${server.graphqlPath}`);
    });
  }).catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });
};

startServer();
