import express from "express";


const router = express.Router();

router.get("/", () => console.log("get blogs"));

export default router;