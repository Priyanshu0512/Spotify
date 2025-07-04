import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";
import cloudinary from "../lib/cloudinary.js";

const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: "auto",
    });
    return result.secure_url;
  } catch (error) {
    console.log("Error in uplpad to cloudinary", error);
    throw new Error("Error uploading to cloudinary");
  }
};

export const createSong = async (req, res, next) => {
  try {
    if (!req.files || !req.files.audioFile || !req.files.imageFile) {
      return res.status(400).json({ message: "Please Upload all the files" });
    }

    const { title, artist, albumId, duration } = req.body;
    const audioFile = req.files.audioFile;
    const imageFile = req.files.imageFile;

    const audioURL = await uploadToCloudinary(audioFile);
    const imageURL = await uploadToCloudinary(imageFile);

    const song = new Song({
      title,
      artist,
      audioURL,
      imageURL,
      duration,
      albumId: albumId || null,
    });

    await song.save();

    if (albumId) {
      await Album.findByIdAndUpdate(albumId, {
        $push: { songs: song.id },
      });
    }

    res.status(201).json(song);
  } catch (error) {
    next(error);
  }
};

export const deleteSong = async (req, res, next) => {
  try {
    const { id } = req.params;
    const song = await Song.findById(id);

    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    if (song.albumId) {
      await Album.findByIdAndUpdate(song.albumId, {
        $pull: { songs: song.id },
      });
    }

    await Song.findByIdAndDelete(id);
    res.status(200).json({ message: "Song delete Successfully" });
  } catch (error) {
    console.log("Error in deleting the song", error);
    next(error);
  }
};

export const createAlbum = async (req, res, next) => {
  try {
    const { title, artist, releaseYear } = req.body;
    if (!req.files || !req.files.imageFile) {
      return res.status(400).json({ message: "Please upload the album image" });
    }
    const { imageFile } = req.files;

    const imageURL = await uploadToCloudinary(imageFile);
    const album = new Album({
      title,
      artist,
      imageURL,
      releaseYear,
    });

    await album.save();
    res.status(201).json(album);
  } catch (error) {
    console.log("Error in create Album", error);
    next(error);
  }
};

export const deleteAlbum = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Song.deleteMany({ albumId: id });
    await Album.findByIdAndDelete(id);

    res.status(200).json({ message: "Album deleted successfully" });
  } catch (error) {
    console.log("Error in delete Album", error);
    next(error);
  }
};

export const checkAdmin = async (req, res, next) => {
  res.status(200).json({ admin: true });
};
