import { useState } from "react";
import { atom, useRecoilState,useRecoilValue } from "recoil";

const authCodeState = atom({
  key: "authCodeState",
  default: "",
});

function Auth() {
  const [authCode, setAuthCode] = useRecoilState(authCodeState);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const check = useRecoilValue(authCodeState);

  const checkatom = () => {
    console.log(check);
    };


  const handleLogin = () => {
    if (authCode === "1234") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid authentication code");
    }
  };

  return (
    <>
      {!isAuthenticated ? (
        <>
          <input
            type="text"
            value={authCode}
            onChange={(e) => setAuthCode(e.target.value)}
          />
          <button onClick={handleLogin}>Log in</button>
          <button onClick={checkatom}>check</button>
        </>
        
      ) : (
        <p>Authenticated</p>
      )}
    </>
  );
}

export default Auth;
