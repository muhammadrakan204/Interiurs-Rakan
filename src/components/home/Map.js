import "./map.css";

const Map = () => {
  return (
    <section id="map">
      <div className="container-map">
        <div className="img-map">
          <img src="./images/map.png" alt="" />
        </div>
        <div className="countries-wrapper">
          <h1>Trusted by Many Countries</h1>
          <div className="countries">
            <p className="border">
              Europe <br />
              <span>45%</span>
            </p>
            <p className="border">
              America <br />
              <span>35%</span>
            </p>
            <p>
              Asia <br />
              <span>20%</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
