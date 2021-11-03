import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState({
    city: "",
    country: "",
  });

  const [query, setQuery] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  const { city, country } = data;

  useEffect(() => {
    const fetchAPI = async () => {
      if (query) {
        const apiKey = "b234cf14d1e1e4bfd82560a37d25401c";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;
        const res = await fetch(url);
        const json = await res.json();
        setResult(json);
        setQuery(false);
      }
    };

    if (result.cod === "404") {
      setError(true);
    } else {
      setError(false);
    }

    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  let component;
  if (error) {
    component = <Error msg="No hay resultados" />;
  } else {
    component = <Weather result={result} />;
  }

  return (
    <>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form data={data} setData={setData} setQuery={setQuery} />
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
