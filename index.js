// Include the Redis package
var redis = require('redis');

var redisEndpoint = 'YOUR_REDIS_ENDPOINT';
// Get the port and host from the endpoint string
var PORT = redisEndpoint.slice(-4);
var HOST = redisEndpoint.slice(0,-5);
//create a new Redis client 
var client = redis.createClient(PORT, HOST);

// Connect to Redis endpoint 
client.on('connect', function () {
    console.log('Connected to Redis node: ' + redisEndpoint);
});
