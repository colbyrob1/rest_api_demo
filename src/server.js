require("./db/connection");
const { response } = require("express");
const express = require('express');
const User = require("./models/User");

const port = process.env.PORT || 5000

const app = express();


app.patch("/user/:id", async (req, Response) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
            console.log(user)
            response.status(200).send(user);
          } catch (error) {
            response.status(404).send({ message: "user not found"});
            }
});

app.delete("/user/:id", (req, Response) => {


});

app.get("/health", (req, response) => {
    response.status(200).send({ message: "API is working" });
});



app.get("/users", async (req, response) => {
    try {
        const allUsers = await User.find({});
        console.log(req.body);
        response.status(200).send(allUsers);
} catch (error) {
    response.status(500).send(error);
}
});

app.post("/users1", async (req, response) => {
    try {
        const user = new User(req.body);
        console.log(req.body);
        res.status(201).send({message: "Success added to database" });
} catch (error) {
    response.status(500).send({ message: "could not connect"});
}
});


app.listen(port, () => {
    console.log(`server is listening on port ${port}`);

});