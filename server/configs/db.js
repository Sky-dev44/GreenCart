import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected"),
    );

    await mongoose.connect(`${process.env.MONGODB_URI}/greencart`);
  } catch (e) {
    console.error(e.message);
  }
};

export default connectDB;
