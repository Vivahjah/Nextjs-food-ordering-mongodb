import mongoose from "mongoose";

export async function PUT(req) {
  mongoose.connect(process.env.MONGODB_URL);
  const data = await req.json();

  console.log(data);



    
}