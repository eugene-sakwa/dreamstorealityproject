import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
function NavBar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("isLoggedIn");

  function handleLogOut() {
    localStorage.removeItem("isLoggedIn");
    navigate("/home");
  }

  return (
    <>
      <nav className="border-2 p-2 border-slate-200 flex justify-between items-center">
        <div className="flex justify-end">
          <a href="/">
            <img
              className="h-16 sm:h-20 transition-transform transform hover:scale-110"
              src={logo}
              alt="Home"
            />
          </a>
        </div>
        <div className="flex justify-between">
          <div className="space-x-6">
            <a
              className=" font-semibold hover:underline text-secondary"
              href="/about"
            >
              About
            </a>

            <a
              className=" font-semibold hover:underline text-secondary"
              href="/contact"
            >
              Contact Us
            </a>
            <a
              className="bg-accent rounded py-1 px-4 text-black hover:bg-secondary hover:text-background
             font-semibold "
              href="/mentors"
            >
              Mentors
            </a>
          </div>
        </div>
        <div className="flex gap-2">
          <a
            className="rounded border border-primary py-1 px-4 bg-primary font-semibold hover:scale-105"
            href="/register"
          >
            Register
          </a>
          {!user ? (
            <a
              className="rounded border border-primary py-1 px-4 bg-secondary font-semibold hover:scale-105"
              href="/login"
            >
              LogIn
            </a>
          ) : (
            <a
              onClick={handleLogOut}
              className="rounded border border-primary py-1 px-4 bg-secondary font-semibold hover:scale-105"
            // href="/login"
            >
              LogOut
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
