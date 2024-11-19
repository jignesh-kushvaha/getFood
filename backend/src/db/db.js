import {mongoose} from 'mongoose';

// Connect to MongoDB
const mongodb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGOURI);
        console.log('Connected to MongoDB');
        
    }catch(err){
        console.error('Error connecting to MongoDB', err);
    }
}

export default mongodb;