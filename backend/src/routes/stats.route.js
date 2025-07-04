import { Router } from "express";
import { Song } from "../models/song.model";
import { Album } from "../models/album.model";
import { User } from "../models/user.model";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const totalSongs = await Song.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalAlbums = await Album.countDocuments();
  } catch (error) {}
});

export default router;
