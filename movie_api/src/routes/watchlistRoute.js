import express from "express"
import {addToWatchList ,removeFromWatchlist , updateWatchlistItem} from "../controller/watchlistController.js"
import {autheMiddleware} from "../middleware/authMiddleware.js"


const router = express.Router();

router.use(autheMiddleware)

router.post("/", addToWatchList )

router.delete("/:id", removeFromWatchlist)

router.put("/:id", updateWatchlistItem)



export default router