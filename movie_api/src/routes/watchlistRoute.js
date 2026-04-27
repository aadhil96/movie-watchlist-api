import express from "express"
import {addToWatchList ,removeFromWatchlist , updateWatchlistItem} from "../controller/watchlistController.js"
import {autheMiddleware} from "../middleware/authMiddleware.js"
import {validateRequest} from "../middleware/validateRequest.js"
import {addToWatchlistSchema} from "../validators/watchlistValidators.js"

const router = express.Router();

router.use(autheMiddleware)

router.post("/", validateRequest(addToWatchList), addToWatchList )

router.delete("/:id", removeFromWatchlist)

router.put("/:id", updateWatchlistItem)



export default router