const { Router } = require("express");
const { user } = require("./models/User");
const { userRouter } = Router();

userRouter.get("/users", async (req, response) => {
    try {
      const allUsers = await User.find({});
      res.status(200).send(allUsers);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  userRouter.post("/users", async (req, res) => {
    try {
      const user = new User(req.body);
      const savedUser = await user.save();
      console.log(req.body);
      res.status(201).send(savedUser);
    } catch (error) {
      res.status(500).send({ message: "Could not connect" });
    }
  });

userRouter.patch("/user/:id", async (req, Response) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
            console.log(user)
            response.status(200).send(user);
          } catch (error) {
            response.status(404).send({ message: "user not found"});
            }
});

userRouter.delete("/user/:id", async (req, Response) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id);
            console.log(user)
            response.status(200).send(user);
          } catch (error) {
            response.status(404).send({ message: "user not found"});
            }

});

userRouter.get("/health", (req, response) => {
    response.status(200).send({ message: "API is working" });
});



userRouter.get("/users", async (req, response) => {
    try {
        const allUsers = await User.find({});
        console.log(req.body);
        response.status(200).send(allUsers);
} catch (error) {
    response.status(500).send(error);
}
});

userRouter.post("/posts/:users_id", async (req, response) => {
    try {
        // const user = new User(req.body);
        // console.log(req.body);
        const post = new Post(req.body);
        post.author = req.params.user_id;
        const returnedValue = await post.save();

        res.status(201).send({message: "Success added to database" });
} catch (error) {
    response.status(500).send({ message: "could not connect"});
}
});


userRouter.listen(port, () => {
    console.log(`server is listening on port ${port}`);

});
module.exports = {
    userRouter,
}