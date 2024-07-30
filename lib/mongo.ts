import mongoose, {Schema} from "mongoose"

declare global{
    var mongoose: any
}
const MONGODB_URI = process.env.NEXT_PUBLIC_MONGOURI!;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local",
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect():Promise<mongoose.Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose: any) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  pages: Number,
})

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);

export{
  dbConnect, Book
} ;