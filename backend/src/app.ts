import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';

const app: express.Application = express();

const server: ApolloServer = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
});

app.use('*', cors());
app.use(compression());

server.applyMiddleware({
    app,
    path: '/graphql',
});

const httpServer = createServer(app);

app.listen(3000, function () {
    console.log('App is listening on port 3000.');
});
