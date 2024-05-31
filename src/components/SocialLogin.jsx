import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { GoogleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    GoogleLogin().then((res) => {
      console.log(res.user);
      const userInfo = {
        name: res.user.displayName,
        email: res.user.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="px-8 pb-8">
      <button onClick={handleGoogleLogin} className="btn btn-outline flex items-center gap-1">
        <FaGoogle></FaGoogle> Google
      </button>
    </div>
  );
};

export default SocialLogin;
