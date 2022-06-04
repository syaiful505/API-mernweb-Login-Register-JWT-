const mongoose = require('mongoose');
const MONGODB = process.env.DATABASE;

mongoose
  .connect(MONGODB, {
    useNewUrlParser : true,
    useUnifiedTopology : true
  })
  .then((result) => { console.debug("MongoDB Connected");})
  .catch((err) => { console.debug("Error Not Connect To MongoDB", err.message);})
