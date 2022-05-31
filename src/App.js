import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState("");
  const fetchApi = useCallback(() => {
    axios('https://dummyjson.com/products')
      .then((response) => {
        setData(response.data.products);
      })
      .catch(error => console.log(error));
  }, [])
  useEffect(() => {
    fetchApi();
  }, [fetchApi]);
  // if (data) {
  //   const products = data.map((value) => {
  //     <img src=value.images[0]} />
  //       <br />
  //       value.price
  //       <br />
  //       value.title
  //       <br />
  //    value.brand
  //   })
  // }
  return (
    <>
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data &&
          data.map((value, index) => {
            return <li key={index} style={{ margin: '2%' }}>
              <img src={value.images[0]} style={{ maxWidth: '150px', height: '150px', }} />
              <br />
              $ {value.price}
              <br />
              {value.brand}
            </li>
          })}
      </ul>
    </>
  )
}

export default App;
