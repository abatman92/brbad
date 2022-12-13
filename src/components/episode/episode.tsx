import { Button, TableCell, TableRow, Typography } from "@mui/material";
import { FC, memo, useCallback, useState } from "react"
import { IEpisode } from "../../types/episode"
import { returnCorrectEnding } from "../../utilits/returnCorrectEnding";

interface IEpisodeProps {
  episode: IEpisode;
  onRemoveClick: (id: number) => void;
  onPlus?: () => void;
  onMinus?: () => void;
}

export const Episode: FC<IEpisodeProps> = memo(({ episode, onRemoveClick, onPlus, onMinus }) => {
    const onRemoveClickHandler = useCallback(
      () => onRemoveClick(episode.episode_id),
      []
    );
  return (
    <TableRow>
      <TableCell>
        <Typography variant="h3">Сезон: {episode.season} Эпизод: {episode.episode}</Typography>
        <Button variant="contained" onClick={onMinus}>
          -
        </Button>
        <Typography
          sx={{ fontSize: "2rem", margin: "0 10px" }}
          variant="caption"
        >
          {episode.charectersQuantity}
        </Typography>
        <Button variant="contained" onClick={onPlus}>
          +
        </Button>
        <Typography
          sx={{ fontSize: "2rem", margin: "0 10px" }}
          variant="caption"
        >
          {returnCorrectEnding(episode.charectersQuantity)}
        </Typography>
      </TableCell>
      <TableCell>
        <Button color="warning" variant="contained" onClick={onRemoveClickHandler}>
          Удалить
        </Button>
      </TableCell>
    </TableRow>
  );
}); 