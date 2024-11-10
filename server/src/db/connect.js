const mongoose = require("mongoose");
// Middleware
const db = 'mongodb+srv://sudar:<93605651>@cluster0.6s8uz.mongodb.net/Grocery-Web-App-MERN-main?retryWrites=true&w=majority&appName=Cluster0'

// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017