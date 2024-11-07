import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://12341234:12341234@cluster0.jjx0o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" )
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
