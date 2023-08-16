import { useState } from "react";
import bcrypt from "bcryptjs";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleUserLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentUser = { userName };

    try {
      const user = await fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        });

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        localStorage.setItem("isLoggedIn", userName);
        navigate("/login");
      } else {
        console.warn("Credentials are not correct");
      }
      //  setLoggedin(!loggedin);
    } catch (err) {
      setError(true);
    } finally {
      setError(false);
    }
  };

  const isLoggedIn = localStorage.getItem("isLoggedIn") !== null;

  return (
    <>

      {!isLoggedIn ? (
        <div className="border border-accent  p-5 mx-auto my-16 max-w-md rounded-md">
          <form className="flex flex-col  text-primary p-8" onSubmit={handleUserLogin}>
            <label htmlFor="userName">Username</label> <br />
            <input
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={userName}
              className="border-2 p-2 rounded-md"
              type="text"
              id="userName"
              name="userName"
              required
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              className="border-2 p-2 rounded-md"
              type="text"
              id="password"
              name="password"
              required
            />
            <br />
            <button className="bg-orange-500 px-8 py-1 rounded-lg" type="submit">
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className="text-center py-6 px-12 h-[300px] flex flex-col justify-center">
          <p className="py-4 text-2xl font-bold text-primary pb-12">Login Successful</p>
          <div className="flex gap-4 text-center justify-center">
            <button className="btn w-52 bg-primary glass btn-primary h-16 text-[#F3A953]">
              <Link to="/mentors">View Mentors</Link>
            </button>
            <button className="btn w-52 bg-primary glass btn-primary h-16 text-[#F3A953]">
              <Link to="/registermentor">Become a Mentor</Link>
            </button>




          </div>
        </div>
      )}
      {error && <div>Invalid Login Credentials</div>}

    </>
  );
}

export default Login;
