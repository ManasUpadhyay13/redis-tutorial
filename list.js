const client = require("./index")


async function listTut() {
    await client.lpush("list:1", "manas");
    await client.lpush("list:1", "harsh");
    await client.rpush("list:1", "upadhyay");
    console.log(await client.llen("list:1"));
}

listTut()


/*
blpop -> removes a message from the head ( left side ) and if the list is empty then it waits for the given time period
and then returns nil

*/