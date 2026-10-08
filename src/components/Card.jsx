import { useState } from "react";
import Details from "./Details";

function Card({ wonder }) {
  const [likes, setLikes] = useState(0);

  const informations = {
    location: wonder.location,
    type: wonder.type,
    size: wonder.size,
  };

  const handleWikipediaClick = () => {
    const wikipediaUrl = `https://fr.wikipedia.org/wiki/${encodeURIComponent(wonder.name)}`;
    window.open(wikipediaUrl, "_blank");
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img src={wonder.image} className="card-img-top" alt={wonder.name}
             height={200} style={{ objectFit: "cover" }} />
        <div className="card-body">
          <h5 className="card-title">{wonder.name}</h5>
          <p className="card-text">{wonder.desc}</p>
          <Details informations={informations} />
          <div className="d-flex gap-2 mt-3 flex-wrap">
            <button className="btn btn-primary" onClick={handleWikipediaClick}>
              Wikipédia
            </button>
            <a href={wonder.google_map} target="_blank" rel="noreferrer"
               className="btn btn-success">
              Google Maps
            </a>
            <button className="btn btn-outline-danger" onClick={() => setLikes(likes + 1)}>
              ❤ J'aime ({likes})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
