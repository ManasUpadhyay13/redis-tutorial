const client = require("./index")


async function listTut() {
    await client.lpush("list:1", "manas");
    await client.lpush("list:1", "harsh");
    await client.rpush("list:1", "upadhyay");
    console.log(await client.llen("list:1"));
}

listTut()