import { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ data, setData, setQuery }) => {
  const [error, setError] = useState(false);
  const { city, country } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "" || country.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    setQuery(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <p>Ambos campos son obligatorios</p> : null}

      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">Ciudad: </label>
      </div>

      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">-- Selecciona un Pais --</option>
          <option value="AR">Argentina</option>
          <option value="BO">Bolivia</option>
          <option value="CO">Brasil</option>
          <option value="CL">Chile</option>
          <option value="CO">Colombia</option>
          <option value="EC">Ecuador</option>
          <option value="PY">Paraguay</option>
          <option value="PE">Peru</option>
          <option value="UY">Uruguay</option>
          <option value="VE">Venezuela</option>
        </select>
        <label htmlFor="country">País: </label>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar Clima"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

Form.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default Form;
