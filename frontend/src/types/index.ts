export interface Song {
  _id: string;
  title: string;
  artist: string;
  albumId: string | null;
  audioURL: string;
  imageURL: string;
  duration: number;
  createdAt: string;
  updatedAt: string;
}

export interface Album {
  _id: string;
  title: string;
  artist: string;
  imageURL: string;
  releaseYear: number;
  songs: Song[];
}
