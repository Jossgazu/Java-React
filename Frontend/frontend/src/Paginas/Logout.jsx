import { Link } from "react-router-dom";

function Logout() {
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <Link className="bg-red-500 w-full m-5 rounded-md border-solid border-2 border-black border-r-2" to="/" onClick={handleLogout}>Logout</Link>
  );
}

export default Logout;