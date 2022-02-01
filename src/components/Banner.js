function Banner() {
  return (
    <div className="banner-container">
      <img
        loading="lazy"
        src={require("../Assets/Images/banner.jpg")}
        alt="Banner"
      />
      <span
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000"
      >
        Sevdiğin filmleri listene ekle, <br />
        arkadaşlarınla paylaş
      </span>
    </div>
  );
}

export default Banner;
