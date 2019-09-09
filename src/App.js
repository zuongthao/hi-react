// import React from "react";
//
// import ApolloClient, { InMemoryCache } from "apollo-boost";
// import { ApolloProvider } from "@apollo/react-hooks";
//
// import { gql } from "apollo-boost";
// import { useQuery } from "@apollo/react-hooks";
//
// const cache = new InMemoryCache();
// const client = new ApolloClient({
//     uri: "https://72.dreamcode.xyz/dreyar/232/graphql",
//     cache,
// });
//
//
// const GET_DOGS = gql`
//     {
//         cmsPage(id: 1) {
//             url_key
//             title
//             content
//             content_heading
//             page_layout
//             meta_title
//             meta_description
//             meta_keywords
//         }
//     }
// `;
//
// const CmsBlocks = function() {
//     const { loading, error, data, client } = useQuery(GET_DOGS);
//
//     console.log(data);
//
//     return null;
// }
//
//
// const App = () => (
//     <ApolloProvider client={client}>
//         <CmsBlocks />
//     </ApolloProvider>
// );
//
// export default App;
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from "graphql-tag";

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'https://72.dreamcode.xyz/dreyar/232/graphql/'
})

const client = new ApolloClient({
    cache,
    link
})

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
const App = () => (
    ''
)
export default App;
