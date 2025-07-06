import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMusicStore } from "@/stores/useMusicStore";
import { Calendar, Trash2 } from "lucide-react";

const SongsTable = () => {
  const { songs, isLoading, error, deleteSong } = useMusicStore();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-zinc-400">Loading songs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <Table className="text-sm w-full border-separate border-spacing-y-1">
      <TableHeader>
        <TableRow className="bg-zinc-900/50">
          <TableHead className="w-[50px] border-b border-zinc-700/40"></TableHead>
          <TableHead className="border-b border-zinc-700/40">Title</TableHead>
          <TableHead className="border-b border-zinc-700/40">Artist</TableHead>
          <TableHead className="border-b border-zinc-700/40">
            Release Date
          </TableHead>
          <TableHead className="text-right border-b border-zinc-700/40">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {songs.map((song) => (
          <TableRow
            key={song._id}
            className="hover:bg-zinc-800/50 rounded-md border-b border-zinc-700/40"
          >
            <TableCell>
              <img
                src={song.imageURL}
                alt={song.title}
                className="w-10 h-10 rounded object-cover border border-zinc-700/40"
              />
            </TableCell>
            <TableCell className="font-medium ">{song.title}</TableCell>
            <TableCell>{song.artist}</TableCell>
            <TableCell>
              <span className="inline-flex items-center gap-1 text-zinc-400">
                <Calendar className="h-4 w-4" />
                {song.createdAt.split("T")[0]}
              </span>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex gap-2 justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                  onClick={() => deleteSong(song._id)}
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SongsTable;
