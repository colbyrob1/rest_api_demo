const getAllUsers = async req, response => {
    try {
        const allUsers = await User.find({});
        res.status(200).send(allUsers);
      } catch (error) {
        res.status(500).send(error);
      }
    }
}