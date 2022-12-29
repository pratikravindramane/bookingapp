import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    " http://localhost:3000/hotels/?featured=true"
  );
  const limitData = data.slice(0, 4);
  console.log(limitData);
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {limitData.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.image} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapPrice}</span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
