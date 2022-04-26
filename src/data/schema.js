import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

 const typeDefs = `
    type Phone {
        id: ID
        name:String
        brand: Brand
        hardware:String
        isQuality:Boolean
        reviews: [Review] 
    }
       type Review {
        username: String
        text: String
    }
    enum Brand {
        Samsung
        Nokia
        Apple
        OTHER
    }

    type Query {
        getOnePhone(id: ID): Phone
    }

    input PhoneInput {
        id: ID
        name:String
        brand: Brand
        hardware:String
        isQuality:Boolean
        reviews: [ReviewInput] 
    }

    input ReviewInput {
        username: String
        text: String
    }

    type Mutation {
        createPhone(input: PhoneInput): Phone
    }
`

const schema = makeExecutableSchema({ typeDefs ,resolvers});

export { schema };