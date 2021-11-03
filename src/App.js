import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState({
    city: "",
    country: "",
  });

  const [query, setQuery] = useState(false);
  const [result, setResult] = useState({});

  const { city, country } = data;

  useEffect(() => {
    const fetchAPI = async () => {
      const apiKey = "b234cf14d1e1e4bfd82560a37d25401c";
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;
      const res = await fetch(url);
      const json = await res.json();
      setResult(json);
      setQuery(false);
    };
    if (query) fetchAPI();
  }, [city, country, query]);

  return (
    <>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form data={data} setData={setData} setQuery={setQuery} />
            </div>
            <div className="col m6 s12">
              <Weather result={result} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
