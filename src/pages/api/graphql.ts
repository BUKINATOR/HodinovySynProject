import {createYoga, createSchema} from 'graphql-yoga'
import {DecodedIdToken} from 'firebase-admin/lib/auth/token-verifier';
import {qpl} from 'graphql-tag';
import {verifyToken} from "../../../server/verifyToken";

type Context = {
    user?: DecodedIdToken | undefined
}

const users = [
    {name: 'John Doe'},
    {name: 'Jane Smith'},
    {name: 'Bob Johnson'},
];

const zamestnavael = [
    {jmeno: 'Lukáš', prijmeni: 'Richard'},
    {jmeno: 'Adam', prijmeni: 'Joel'},
];


const brigadnik = [
    {jmeno: 'Jan', prijmeni: 'Novák', vyplata: 100, kategorie: 'zahrada', vek: 15},
    {jmeno: 'Petr', prijmeni: 'Novotný', vyplata: 200, kategorie: 'domácnost', vek: 20},
];


const typeDefs = `
  type Query {
    users: [User!]!
    githubUsers: [GithubUser!]!
    vlastnik: [Vlastnik!]!
    najem: [Najem!]!
    detailnajemnika: [DetailNajemnika!]!
  }
  type User {
    name: String  o  
  }
  type GithubUser {
    id: ID!
    login: String!
    avatarUrl: String!
  }
  type Vlastnik {
    adresa: String!
    jmeno: String!
  }
  type Najem {
    najem: Int!
  }
  type DetailNajemnika {
    jmeno: String!
    prijmeni: String!
    vyplata: Int!
    prace: String!
    vek: Int!
  }
`;

const resolvers = {

    Query: {
        users: () => users,
        brigadnik: () => brigadnik,
        zamestnavatel: () => zamestnavael,
    },
    githubUsers: async (root_, args_, context : Context) => {
    }
};

const schema = createSchema({
    typeDefs,
    resolvers,
})

export const config = {
    api: {
        // Disable body parsing (required for file uploads)
        bodyParser: false,
    },
}

export default createYoga({
    schema,
    // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
    graphqlEndpoint: '/api/graphql',
    context: async (context) => {
        const auth = context.request.headers.get('authorization');
        console.log(auth);
        return {
            user: auth
                ? await verifyToken(auth)
                : undefined
        } as Context
    }
})