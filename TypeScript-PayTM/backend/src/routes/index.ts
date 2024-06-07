import express from "express";
import userRouter from "./users";
import accountRouter from "./account";

const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accountRouter);

export default router;