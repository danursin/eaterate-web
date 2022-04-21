import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import config from "../config";

const cache = new InMemoryCache();
const link = createHttpLink({
    uri: config.apiUrl
});

const client = new ApolloClient({
    cache,
    link
});
export default client;
