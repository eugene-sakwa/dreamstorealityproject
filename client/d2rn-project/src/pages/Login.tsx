import { useState } from "react";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";

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
    <div className="border border-accent  p-5 mx-auto my-16 max-w-md rounded-md">
      {!isLoggedIn ? (
        <form className="flex flex-col  p-8" onSubmit={handleUserLogin}>
          <label htmlFor="userName">Username</label> <br />
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
            className="border-2"
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
            className="border-2"
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
      ) : (
        <div className="text-center py-6">
          <p className="py-4">Login Successful</p>
          <div>
            <a className="bg-orange-500 px-8 py-1 rounded-lg" href="/mentors">
              View mentors
            </a>
            <a
              className="bg-orange-500 px-8 py-1 rounded-lg"
              href="/registermentor"
            >
              Be a mentor
            </a>
          </div>
        </div>
      )}
      {error && <div>Invalid Login Credentials</div>}
    </div>
  );
}

export default Login;
