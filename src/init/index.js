import { sampleListings } from "./data.js";
import Listing from "../models/listngs.model.js";

export async function initData(){
    await Listing.deleteMany({})
    await Listing.insertMany(sampleListings)
}