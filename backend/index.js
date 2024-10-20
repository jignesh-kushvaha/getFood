import express from 'express'
import mongodb from './src/db/db.js';
import userRouter from './src/Routes/User.routes.js'
import dotenv from 'dotenv';

dotenv.config();
mongodb();

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization,Origin, X-Requested-With,Accept');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());
app.use('/api', userRouter)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})