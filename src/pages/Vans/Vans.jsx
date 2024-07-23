import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLoaderData } from 'react-router-dom';
import { getVans } from '../../api';

export function loader() {
  return getVans();
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const data = useLoaderData();

  let typeFilter = searchParams.get('type');

  function handleClick(param) {
    if (param) {
      setSearchParams({ type: param });
    } else {
      setSearchParams({});
    }
  }

  const displayedVans = typeFilter ? data.filter(val => val.type === typeFilter) : data;

  const vansList = displayedVans.map(van => (
    <li key={van.id} className='van-tile'>
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
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
  ));

  if (error) {
    return <h1 aria-live='assertive'>There was an error: {error.message}</h1>;
  }

  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <div className='van-list-filter-buttons'>
        <button
          onClick={() => handleClick('simple')}
          className={`van-type simple${typeFilter === 'simple' ? ' selected' : ''}`}
        >
          Simple
        </button>
        <button
          onClick={() => handleClick('luxury')}
          className={`van-type luxury${typeFilter === 'luxury' ? ' selected' : ''}`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleClick('rugged')}
          className={`van-type rugged${typeFilter === 'rugged' ? ' selected' : ''}`}
        >
          Rugged
        </button>
        {typeFilter && (
          <button onClick={() => handleClick(null)} className='van-type clear-filters'>
            Clear filters
          </button>
        )}
      </div>
      <ul className='van-list'>{vansList}</ul>
    </div>
  );
}
