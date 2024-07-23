import { useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();

  return (
    <>
      <h1>An error occurred: </h1>
      {Object.entries(error)
        .reverse()
        .map(val => {
          return (
            <p key={val[0]}>
              <b>{val[0]}: </b>{val[1]}
            </p>
          );
        })}
    </>
  );
}
