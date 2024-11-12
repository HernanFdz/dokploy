import { IncomingMessage, ServerResponse } from 'http';
import { createServer } from 'http';

const handler = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === '/api/custom-path') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from the custom serverless function!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
};

const port = process.env.PORT || 3000;
const server = createServer(handler);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
