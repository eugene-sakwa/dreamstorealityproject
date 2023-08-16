import hero from "../images/hero.png";
function Hero() {
  return (

    <div
      className="hero items-end pb-96 min-h-screen"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-primary">
        <div className="max-w flex flex-col items-center ">
          <h2 className="mb-5 p-12 text-7xl font-bold bg-primary text-background rounded-md ">
            Dreams to Reality Network!
          </h2>
          <p className="bg-primary opacity-80 p-2 w-[700px] text-white text-center text-4xl font-semibold">
            Inspire change to foster growth...
          </p>
          <p className="bg-primary opacity-80 p-2 w-[700px] text-white text-center text-4xl font-semibold">deliver Big Impact through </p>

          <p className="text-9xl  font-bold p-3 text-primary pt-12 pb-24"> small actions now.</p>
          <div className="flex gap-4  justify-center">
            <button className="btn btn-primary">
              <a
                href="/register"
                className="font-bold text-white w-48 px-4 py-2 rounded-lg m-2"
              >
                Register
              </a>
            </button>
            <button className="btn btn-secondary">
              <a

                href="/login"
                className="font-bold text-white w-48  px-4 py-2 rounded-lg m-2"
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
