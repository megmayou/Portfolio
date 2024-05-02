import ImgAvatar from "../../assets/Avatar-profil.jpg";
import "./AboutMe.css";

function Presentation() {
  return (
    <section className="section-presentation">
      <h1>Salut, moi c'est Mégane</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt
        laudantium in, voluptatum magni enim porro sit at a facilis iste esse
        repellat magnam vero natus amet sint, odit voluptas.
      </p>
      <img
        className="image-avatar"
        src={ImgAvatar}
        alt="Visage femme avec lunnettes"
      />
      <button>
        <a href="mailto:megane.authemayou@hotmail.com">Contact me</a>{" "}
      </button>
    </section>
  );
}

export default Presentation;
