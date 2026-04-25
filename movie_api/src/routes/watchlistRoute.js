import express from "express"
import {addToWatchList} from "../controller/watchlistController.js"
import {autheMiddleware} from "../middleware/authMiddleware.js"


const router = express.Router();

router.use(autheMiddleware)

router.post("/", addToWatchList )


export default router