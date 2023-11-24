const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/users");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { UseNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("mongodb connected");
});
// mongoose.connect(
//   "mongodb+srv://bitcoinbrklyn:iyegang718@cluster0.0iwo0sk.mongodb.net/reactdatabase?retryWrites=true&w=majority"
// );

app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});
app.post("/CreateUser", (req, res) => {
  // Creates a new User & store in DB show it to client-side.
  UserModel.create(req.body)
    // Call the result of the schema user built!
    .then((users) => res.json(users))

    .catch((err) => res.json(err));
});

app.listen(3003, () => {
  console.log("App Server is running!node ");
});
