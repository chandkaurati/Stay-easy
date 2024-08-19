import { Router } from "express";
import { getListings } from "../controllers/listingController";

const router = Router()

router.get("/listings", getListings )

export default router