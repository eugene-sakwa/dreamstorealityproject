import hero from "../images/hero.png";
function Hero() {
  return (
 
    <div
      className="hero items-end pb-96 min-h-screen"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-primary">
        <div className="max-w">
          <h2 className="mb-5 text-5xl font-bold bg-primary text-background rounded-md p-2">
            Dreams to Reality Network!
          </h2>

          <p className="text-neutral text-center text-4xl font-semibold">
            Inspire change to foster growth...{" "}
          </p>
          <p className="text-neutral text-center text-4xl font-semibold p-2">deliver Big Impact through </p>
          <p className="text-3xl font-bold p-3"> small actions now.</p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-primary">
              <a
                href="/register"
                className="font-bold text-white px-4 py-2 rounded-lg m-2"
              >
                Register
              </a>
            </button>
            <button className="btn btn-secondary">
              <a
                href="/login"
                className="font-bold text-gray-800 px-4 py-2 rounded-lg m-2"
              >
                LogIn
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

// #064acb - primary
// #366ed8 - secondary
// #f3a953 - accent
// #f2f3f3 - background
