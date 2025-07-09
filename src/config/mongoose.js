import mongoose, { model } from "mongoose"

export const connectDatabase = async (databaseUrl) => {
  try {
    await mongoose.connect(databaseUrl, {
      serverSelectionTimeoutMS: 4000
    });
    console.log('✅ Connected to MongoDB')
  } catch (e) {
    console.error('❌ MongoDB connection error:', e.message);
    process.exit(1);
  }
};
