import {execute, makePromise} from 'apollo-link';
import {HttpLink} from 'apollo-link-http';

import gql from "graphql-tag";

const uri = 'https://countries.trevorblades.com/';
const link = new HttpLink({uri});

const QUERY = gql`
    query {
        countries {
            name
            code
        }
    }
`;

const operation = {
    query: QUERY,
    variables: {}, //optional
    operationName: null, //optional
    context: {
        headers: {
            authorization: "asdasdasdasdasd"
        }
    }, //optional
    extensions: {} //optional
};


function App() {
    // execute returns an Observable so it can be subscribed to
    execute(link, operation).subscribe({
        next: data => console.log(`received data: ${JSON.stringify(data, null, 2)}`),
        error: error => console.log(`received error ${error}`),
        complete: () => console.log(`complete`),
    });

    // For single execution operations, a Promise can be used
    makePromise(execute(link, operation))
        .then(data => console.log(`received data ${JSON.stringify(data, null, 2)}`))
        .catch(error => console.log(`received error ${error}`));
    return null;
}

export default App;
