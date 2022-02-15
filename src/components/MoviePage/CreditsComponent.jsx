import { useEffect, useState } from "react";

function CreditsComponent({ movieId }) {
  const [creditInfos, setCreditInfo] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9f2d1368e54e609b6d793560018b878a&language=tr-TR`
    )
      .then((res) => res.json())
      .then((res) => setCreditInfo(res.cast));
  }, [movieId]);

  return (
    <>
      {creditInfos &&
        creditInfos.map((credit, index) => {
          return (
            <div key={index} className="credit">
              <div className="credit-image">
                {credit.profile_path && (
                  <img
                    loading="lazy"
                    src={`https://image.tmdb.org/t/p/original/${credit.profile_path}`}
                    alt="CreditPhoto"
                  />
                )}
              </div>
              <div className="credit-infos">
                <div className="credit-ch">
                  <span>character:</span>
                  <p>{credit.character}</p>
                </div>
                <div className="credit-name">
                  <span>name:</span>
                  <p>{credit.name}</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default CreditsComponent;
