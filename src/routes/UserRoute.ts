import express from "express";
import { User } from "../entities/User.entity";

const router = express.Router();

//get
router.get("/", async (req, res) => {
  await User.find().then((data) => {
    res.json(data);
  });
});

//post
router.post("/", async (req, res) => {
  //const userDetails = req.body;

  const { firstName, lastName,age } = req.body;
  const user = User.create({
    firstName: firstName,
    lastName: lastName,
    age:age
  });
  await user.save();
  return res.json(user);
});

//delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const response = await User.delete(parseInt(id));

  return res.json(response);
});

export { router as UserRouter };
