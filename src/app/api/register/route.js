
import { User } from "@/app/models/User";
import mongoose from "mongoose"


export async function POST(req) {
    const body = await req.json() //get the response as a json
    mongoose.connect(process.env.MONGODB_URL)
    const createdUser = await User.create(body)
    return Response.json(createdUser);
}