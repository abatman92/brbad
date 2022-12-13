
import { DownloadOutlined } from '@mui/icons-material';
import { Button, Container, Table, TableBody, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import ApiRequests from './api/api';
import { Episode } from './components/episode/episode';
import { IEpisode } from './types/episode';

function App() {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const fetchEpisodes = useCallback(async () => {
    const data = await ApiRequests.getAll();
    setEpisodes(data);
  }, [])
  const removeEpisode = useCallback((id: number) => {
    setEpisodes(prev => prev.filter((item) => item.episode_id !== id));
  }, [])
  const sortByIncrement =  useCallback(() => {
     setEpisodes(prev => [...prev.sort((a, b) => a.charectersQuantity > b.charectersQuantity ? 1 :  -1)])
  }, [])
  const sortByDecrement = useCallback(() => {
    setEpisodes(prev => [...prev.sort((a, b) => a.charectersQuantity > b.charectersQuantity ? -1 :  1)])
 }, [])
 const setQuantity = useCallback((type: 'increment' | 'decrement', id: number) => {
  switch (type) {
    case 'increment': {
      return () => {
        setEpisodes(prev => {
          const index = prev.findIndex(item => item.episode_id === id);
          if (!!prev[index].charectersQuantity)
            prev[index].charectersQuantity = prev[index].charectersQuantity + 1;
          return [...prev]
        })
      }
    }
    case 'decrement': {
      return () => {
        setEpisodes(prev => {
          const index = prev.findIndex(item => item.episode_id === id);
          if (!!prev[index].charectersQuantity)
            prev[index].charectersQuantity = prev[index].charectersQuantity - 1;
          return [...prev]
        })
      }
    }
  }
 }, [])
  return (
    <Container maxWidth={"md"} sx={{ minHeight: "100vh" }}>
      <Typography variant="h1" marginY="2rem">
        <Typography sx={{background: 'var(--dark)', color: 'var(--yellow)'}} variant='h1' component="span">Br</Typography>eaking<Typography sx={{background: 'var(--dark)', color: 'var(--yellow)'}} variant='h1' component="span">Ba</Typography>d Episodes
      </Typography>
      {!episodes.length && (
        <Button onClick={fetchEpisodes} variant="contained">
          Загрузить эпизоды
          <DownloadOutlined />
        </Button>
      )}
      {episodes.length ? (
        <>
          <Button sx={{marginRight: '15px'}} variant="contained" onClick={sortByDecrement}>
            Сортировать по убыванию кол-ва персонажей
          </Button>
          <Button variant="contained" onClick={sortByIncrement}>
            Сортировать по возрастанию кол-ва персонажей
          </Button>
        </>
      ) : (
        <></>
      )}
      <Table>
        <TableBody>
          {episodes.map((item) => (
            <Episode
              key={item.episode_id}
              episode={item}
              onRemoveClick={removeEpisode}
              onMinus={setQuantity('decrement', item.episode_id)}
              onPlus={setQuantity('increment', item.episode_id)}
            />
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default App;
