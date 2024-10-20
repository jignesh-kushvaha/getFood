import {mongoose} from 'mongoose';
// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://jigneshkushvaha:Jigneshatlas1410@cluster0.naone.mongodb.net/getfood?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
const mongodb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGOURI);
        console.log('Connected to MongoDB');
        // fetching data from MongoDB
        const foodItemsData = await mongoose.connection.db.collection("fooditems").find({}).toArray();
        //console.log(foodItemsData); 
        
    }catch(err){
        console.error('Error connecting to MongoDB', err);
    }
}

export default mongodb;
// module.exports = mongodb;