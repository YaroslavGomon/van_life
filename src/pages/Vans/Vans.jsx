import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Vans() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/vans')
      .then(res => res.json())
      // .then(data => console.log(data));
      .then(data => setData(data.vans));
  }, []);

  const vansList = data.map(van => {
    return (
      <li key={van.id} className='van-tile'>
        <Link
          to={`/vans/${van.id}`}
          aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
        >
          <img src={van.imageUrl} alt={`Image of ${van.name}`} />
          <div className='van-info'>
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </li>
    );
  });

  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <ul className='van-list'>{vansList}</ul>
    </div>
  );
}
