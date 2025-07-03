import { FcGoogle } from "react-icons/fc";
import { FaGoogle } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";

export const BlogPage = () => {
  return (
    <>
      <button className="btn google">
        <FcGoogle style={{ marginRight: 8, fontSize: 20 }} />
        Continue with Google (FcGoogle)
      </button>

      <button className="btn google">
        <FaGoogle style={{ marginRight: 8, fontSize: 20, color: '#4285F4' }} />
        Continue with Google (FaGoogle)
      </button>

      <button className="btn google">
        <SiGoogle style={{ marginRight: 8, fontSize: 20, color: '#DB4437' }} />
        Continue with Google (SiGoogle)
      </button>
    </>
  );
};
