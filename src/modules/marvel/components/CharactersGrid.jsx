import React, { useState, useEffect } from "react";
import {
  getAllCharacters,
  mapCharacterToCard,
} from "@/modules/marvel/services/character";

import Loading from "@/modules/core/components/atoms/Loading.jsx";
import CharacterCard from "@/modules/marvel/components/CharacterCard.jsx";





const EmptyState = () => {
  return (<h1>No elements found</h1>);
}


export default function CharacterGrid() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    setLoading(true);
    const data = await getAllCharacters(mapCharacterToCard);
    setCharacters(data.results);
    setLoading(false);
  }

  if(isLoading){
    return <Loading/>;
  }

  if(characters.length === 0){
    return <EmptyState/>
  }

  return characters.map(({name, image}, index) => (
    <CharacterCard
      name={name}
      image={image}
      key={index}
    />
  ));
}



