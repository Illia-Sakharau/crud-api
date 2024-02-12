import http from 'http';

const PORT = process.env.PORT || 8080;

const server = http.createServer(() => {  
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
