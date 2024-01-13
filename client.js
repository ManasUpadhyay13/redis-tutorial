const Redis = require('ioredis')
const redis = new Redis()


async function hello() {
    const res = await redis.set("msg:1", "manas", "nx")
    // const res = await redis.get("msg:1")
    // await redis.expire("msg:1", 20)


    // console.log(res);
}

hello()
