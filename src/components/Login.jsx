import { useState } from "react";
import Swal from "sweetalert2";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      Swal.fire({ icon: "success", text: "Connexion réussie !" });
      setIsLogged(true);
    } else {
      Swal.fire({ icon: "error", title: "Erreur", text: "Identifiants incorrects" });
    }
  };

  if (isLogged) {
    return (
      <div className="alert alert-success text-center mt-5">
        <h3>Bienvenue, {username} !</h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 mx-auto" style={{ maxWidth: "400px" }}>
      <h3>Connexion</h3>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Login</label>
        <input id="username" type="text" className="form-control"
               value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input id="password" type="password" className="form-control"
               value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Se connecter</button>
    </form>
  );
}

export default Login;
