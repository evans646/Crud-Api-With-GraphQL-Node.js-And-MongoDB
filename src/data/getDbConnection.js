import mongoose from 'mongoose';

//db url, so we can connect to mongo atlas 
const dbUrl = 'mongodb+srv://gqlcrudapi:5JSYU7V0N03USMhP@cluster0.ljm9b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

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



