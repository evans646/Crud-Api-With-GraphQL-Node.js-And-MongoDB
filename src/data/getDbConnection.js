import mongoose from 'mongoose';

//db url, so we can connect to mongo atlas 
const dbUrl = 'mongodb+srv://newuser:AWRghOzUdZqRK25z@cluster0.7gvuv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "CONNECTION ERROR:"));
db.once("open", () => {console.log("DATABASE CONNECTED")});

const phoneSchema = new mongoose.Schema({
    name: {
        type: String
    },
    brand: {
        type: Array
    },
    brand: {
        type:String,
        enum : [  "Samsung",
        "Nokia",
        "Apple",
        "OTHER"],
    },
    hardware: {
        type: String
    },
    isQuality: {
        type: Boolean
    },
    reviews: {
        type: Array
    }
});

const Phones = mongoose.model('phones', phoneSchema);

export { Phones };



