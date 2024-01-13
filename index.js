const { Redis } = require("ioredis")

const client = new Redis()

module.exports = client


// we are tyring to create a server to hit the port of redis sever running on docker.