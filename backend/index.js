import express from 'express'
import mongodb from './src/db/db.js';
import dotenv from 'dotenv';
import userRouter from './src/Routes/User.routes.js'
import foodItemDataRouter from './src/Routes/FoodItemDatas.routes.js';
import foodCategoryRouter from './src/Routes/FoodCategoryDatas.routes.js';
import orderRouter from './src/Routes/Orders.routes.js';

dotenv.config();
mongodb();

const app = express()

//cors error solution
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://get-food-frontend.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization,Origin, X-Requested-With,Accept');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', foodItemDataRouter);
app.use('/api', foodCategoryRouter);
app.use('/api', orderRouter);

app.get('/', (req, res) => {
  res.send('Hello from backend');
});

app.listen(5000, () => {
  console.log(`App started listening...`)
})

export default app;