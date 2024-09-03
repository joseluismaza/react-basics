import { useState, useEffect } from "react";
import "./Characters.css"
import Loading from "../../components/Loading/Loading";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Pagination from "../../components/Pagination/Pagination";

const Characters = () => {

  const [characters, setCharacters] = useState([]); // carga de personajes
  const [loading, setLoading] = useState(false); // gif de carga
  const [page, setPage] = useState(1); //paginas
  const [limit, setLimit] = useState(1); // limite de paginas


  useEffect(() => {
    setLoading(true);
    setCharacters([]);
    fetch(`https://starwars-databank-server.vercel.app/api/v1/characters?page=${page}&limit=20`)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.data);
        setLoading(false);
        setLimit(Math.floor(res.info.total / res.info.limit) + 1);
      });
  }, [page]);


  return (
    <main id="characters">
      {loading && <Loading />}
      {characters.map((character) => (
        <CharacterCard key={character._id} character={character} />
      ))}
      <Pagination page={page} setPage={setPage} limit={limit} />
    </main >
  );

};

export default Characters