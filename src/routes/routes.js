import { Router } from "express";
import { getListings } from "../controllers/listingController";
import router from "./listingRouter";

router.get("/listings", getListings)

export default router