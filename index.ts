import { connect } from "mongoose";

const run = async () => {
    await connect(process.env.MONGODB_URI as string);
    console.log("Connected to my DB");
}

run()
.catch((err) => console.error(err))