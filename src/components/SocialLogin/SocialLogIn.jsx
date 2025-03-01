import useAuth from "../../Hooks/useAuth";

const SocialLogIn = () => {

  const { googleLogin, githubLogin } = useAuth();

  return (
    <div>
      <div className="flex justify-around">
        <button onClick={()=>googleLogin()} className="btn btn-primary">Google</button>
        <button onClick={()=>githubLogin()} className="btn btn-primary">GitHub</button>
      </div>
    </div>
  );
};

export default SocialLogIn;
