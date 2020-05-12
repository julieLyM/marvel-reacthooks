import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCharacterByIdComic } from '../service/marvelData';

export const Comic = () => {
  const [comic, setComic] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchComic = async () => {
      const data = await getCharacterByIdComic(id);
      console.log(data);
      setComic(data);
    };
    fetchComic();
  }, [id]);

  return (
    <div style={{ color: 'red', fontSize: '20px' }}>
      comics in construction
      {comic}
    </div>
  );
};
