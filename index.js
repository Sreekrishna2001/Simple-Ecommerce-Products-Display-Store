const express = require("express"),
         cors = require("cors"),
           bp = require("body-parser");
          app = express(),
      DB_NAME = "ECommerce",
         port = 9000,
         mongoose=require('mongoose');

app.use(bp.json());
app.use(express.json());
app.use(cors());

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);

const productroute=require('./route/ProductRouter');
const signin=require('./route/signinrouter');

app.use('/Users',signin);
app.use('/products',productroute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});