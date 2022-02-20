// SASS
import "../../Assets/Styles/filterPage.scss";

function Filter() {
  function clickedFilterOption(optionElement) {
    console.log(optionElement.children);

    if (optionElement.classList.contains("filter-option")) {
      if (optionElement.classList.contains("selected-filter")) {
        optionElement.classList.remove("selected-filter");
        optionElement.children[1].style.display = "none";
      } else {
        optionElement.classList.add("selected-filter");
        optionElement.children[1].style.display = "block";
      }
    }
  }

  return (
    <div className="filter-section-container">
      <div className="movie-and-tvshow">
        <span className="selected-show">Filmler</span>
        <span>Diziler</span>
      </div>

      <div className="filter-container">
        <div
          onClick={(e) => {
            clickedFilterOption(e.target);
          }}
          className="filter-option"
        >
          Yayın Yılı
          <i className="fas fa-angle-down"></i>
          <div className="filter-modal">
            Min:
            <input
              className="min-year"
              type="number"
              min="0"
              max="2030"
              placeholder="Min year"
            />
            Max:
            <input
              className="max-year"
              type="number"
              min="0"
              max="2030"
              placeholder="Max year"
            />
          </div>
        </div>

        <div
          onClick={(e) => {
            clickedFilterOption(e.target);
          }}
          className=" filter-option"
        >
          Türler
          <i className="fas fa-angle-down"></i>
          <div className="filter-modal">
            <div className="close-filter-modal">
              <i className="fas fa-times-circle"></i>
            </div>
            Açılacak ekran
          </div>
        </div>

        <div
          onClick={(e) => {
            clickedFilterOption(e.target);
          }}
          className="filter-option"
        >
          Değerlendirme
          <i className="fas fa-angle-down"></i>
          <div className="filter-modal">
            <div className="close-filter-modal">
              <i className="fas fa-times-circle"></i>
            </div>
            Açılacak ekran
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
