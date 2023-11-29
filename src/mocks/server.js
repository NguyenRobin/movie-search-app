// src/mocks/node.js
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);

// To confirm a successful setup, create a simple outgoing request listener on the server object:
server.events.on('request:start', ({ request }) => {
  console.log(
    'MSW intercepted, confirm a successful setup✅:',
    request.method,
    request.url
  );
});
