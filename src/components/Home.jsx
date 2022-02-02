import '../styles/home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home_card">
        <h1 className="home_h1">
          Il n&apos;y a rien de plus beau que de pouvoir partager des souvenirs
        </h1>
        <p className="home_p1">Bienvenue sur Remember.</p>
        <p className="home_p2">
          Créer vos livres photos numérique et partagez les avec votre famille
          et vos amis.
        </p>
        <p className="home_p3">Ici vos souvenirs ne s&apos;effaceront pas.</p>
      </div>
      <div className="home_button flex border-4 py-2 px-6 focus:outline-none rounded-full hover:bg-white">
        <button>Créer mon Livre</button>
      </div>
    </div>
  );
};

export default Home;
