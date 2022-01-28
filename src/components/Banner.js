function Banner(params) {
  return (
    <div className="banner-container">
      <img src={require("../Assets/Images/banner.jpg")} />
      <span>
        Sevdiğin filmlerini listene ekle, <br />
        arkadaşlarınla paylaş
      </span>
    </div>
  );
}

export default Banner;
