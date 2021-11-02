import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState({
    city: "",
    country: "",
  });

  return (
    <>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form data={data} setData={setData} />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
