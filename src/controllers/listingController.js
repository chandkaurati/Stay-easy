import Listing from "../models/listngs.model.js";
export const   getListings =  async(req,res)=>{
  const listings = await Listing.find({})
   res.render("index", {listings})
}