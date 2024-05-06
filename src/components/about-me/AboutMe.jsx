import ImgAvatar from "../../assets/Avatar-profil.jpg";
import "./AboutMe.css";

function Presentation() {
  return (
    <section className="section-presentation">
      <h1>Salut, moi c&apos;est Mégane</h1>
      <p>
        Depuis quelques années à travailler dans le secteur du RH j&apos;ai
        voulu me réorienter pour revenir sur un métier de production. Après de
        nombreux échanges et une pratique autonome, le développement web était
        un choix évident de poursuite d&apos;évolution professionnelle.
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
