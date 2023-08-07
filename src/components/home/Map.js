import "./map.css";

const Map = () => {
  return (
    <section id="map">
      <div className="container-map">
        <div className="img-map">
          <img src="./images/map.png" alt="" />
        </div>
        <div className="countries-wrapper">
          <p className="title">Trusted by Many Countries</p>
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
