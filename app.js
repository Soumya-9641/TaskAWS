const express = require('express');
const cors = require('cors');
require("./connection");
const app = express();

const PORT = process.env.PORT||3000;
require('dotenv').config();
const user=require("./router/User");
const task= require("./router/Task")

  app.use(express.json());
  app.use(cors());
  app.use("/user",user);
  app.use("/task",task);
  app.listen(PORT, () => {
    
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  
   