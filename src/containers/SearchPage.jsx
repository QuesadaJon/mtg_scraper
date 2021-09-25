import React, { useEffect, useState } from 'react';
import CardList from '../components/cardList';
import { getCards } from '../services/dataMunger';

const SearchPage = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards(search).then((cards) => {
      setCards(cards);
      setLoading(false);
    });
  }, []);

  if(loading) return <h1>Loading... </h1>;
  return <CardList cards={cards} />;

};

export default SearchPage;
