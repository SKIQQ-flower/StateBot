import { Client, HttpClient, ParseClient, WorkerClient } from 'seyfert';
import { connect } from 'mongoose';

declare module 'seyfert' {
    interface UsingClient extends ParseClient<Client<true>> {}
    interface UsingClient extends ParseClient<WorkerClient<true>> { }
    interface UsingClient extends ParseClient<HttpClient> { }
};

const run = async () => {
    await connect(process.env.MONGODB_URI as string);
    console.log("Connected to my DB");
}

run()
.catch((err) => console.error(err))
  
const client = new Client();
client.start().then(() => client.uploadCommands());