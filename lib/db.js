import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const client = MongoClient.connect(
    "mongodb+srv://dbLasse:oh5RM00eZHsIAaGr@atlascluster.amz9ine.mongodb.net/auth?retryWrites=true&w=majority"
  );

  return client;
};

export default connectToDatabase;
