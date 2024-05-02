import "./Projets.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function Projets({ listAbout }) {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === listAbout.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? listAbout.length - 1 : slide - 1);
  };
  return (
    <section>
      <h2 className="propos">A propos</h2>
      <section className="card">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={prevSlide}
        />
        <section className="card-projet">
          {listAbout.map((article, index) => (
            <article
              key={index}
              className={
                slide === index ? "carroussel" : "carroussel carroussel-hidden"
              }
            >
              <img
                src={article.imgSrc}
                alt={article.alt}
                className="imgCarroussel"
              />
              <h3>{article.title}</h3>
              <p>{article.description} </p>
            </article>
          ))}
        </section>
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
      </section>
      <span className="indicators">
        {listAbout.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={
                slide === index ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </section>
  );
}

Projets.propTypes = {
  List: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Projets;
