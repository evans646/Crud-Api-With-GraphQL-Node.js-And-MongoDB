import express from 'express';
import { graphqlHTTP }  from 'express-graphql';
import { schema } from './data/schema';
const app = express();
const port = 5050



app
.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app
.listen(port, 
() => console.log(`Running on server port localhost: ${port}`));

