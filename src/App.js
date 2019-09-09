import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import gql from "graphql-tag";

const uri = 'http://gclock.local/index.php/graphql/';
const cache = new InMemoryCache();
const link = new HttpLink({
    uri: uri
})

const client = new ApolloClient({
    cache,
    link
})

function App() {
    client
    .query({
        query: gql`
            {
                cmsPage(id: 1) {
                    url_key
                    title
                    content
                    content_heading
                    page_layout
                    meta_title
                    meta_description
                    meta_keywords
                }
            }
        `
    })
    .then(result => console.log(result));
    return null;
}

export default App;
