function Banner() {
  return (
    <div className="banner-container">
      <img
        loading="lazy"
        src={require("../Assets/Images/banner.jpg")}
        alt="Banner"
      />
      <span>
        Sevdiğin filmleri listene ekle, <br />
        arkadaşlarınla paylaş
      </span>
    </div>
  );
}

export default Banner;
