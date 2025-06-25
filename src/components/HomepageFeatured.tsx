import "@/styles/components/_homepage-featured.scss";

// import Image from "next/image";

// import givenchy_runway from "";
// import margiela_store from "";

export default function HomepageFeatured() {
  return (
    <>
      <h1 className="featured__title">Vetemòre</h1>
      <section className="featured__grid">
        <div className="featured__wrapper">
          {/* <Image className="featured__image" alt="" src={margiela_store} /> */}
          <span className="featured__description">Explore Maison Margiela</span>
        </div>
        <div className="featured__wrapper">
          {/* <Image className="featured__image" alt="" src={givenchy_runway} /> */}
          <span className="featured__description">Givenchy FW23 Menswear</span>
        </div>
      </section>
    </>
  );
}
