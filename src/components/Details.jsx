import { useState } from "react";
function Details({ informations }) {
  const { location, type, size } = informations;
  const [showDetails, setShowDetails] = useState(false);
 
  return (
    <>
      <button className="btn btn-outline-primary mb-2"
              onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide details" : "Show details"}
      </button>
 
      {showDetails && (
        <ul className="list-group">
          <li className="list-group-item"><strong>Localisation :</strong> {location}</li>
          <li className="list-group-item"><strong>Type :</strong> {type}</li>
          <li className="list-group-item"><strong>Dimension :</strong> {size}</li>
        </ul>
      )}
    </>
  );
}
 
export default Details;
