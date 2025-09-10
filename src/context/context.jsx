import { createContext, useState } from "react";
import { auth } from "../config/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signOut, signInWithPopup } from "firebase/auth";

export const Context = createContext();

export const Provider = ({ children }) => {
  const navigate = useNavigate();
  const [zoomin, setzoomin] = useState(14);
  const [zoomout, setzoomout] = useState(zoomin);
  const [compiledCode, setcompiledCode] = useState("");
  const [output, setoutput] = useState([]);
  const [Copiednotificatio, setCopiednotificatio] = useState(false);
  const [copied, setcopied] = useState(false);
  const [Newfileisopen, setNewfileisopen] = useState(false);
  const [isloginscreenopen, setisloginscreenopen] = useState(true);

  // 🔑 Sidebar toggle state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen((prev) => !prev);
  }

  // zoom in function
  function funczoomin() {
    setzoomin((prev) => prev + 2);
  }

  // zoom out function
  function funczoomout() {
    setzoomin((prev) => prev - 2);
  }

  // output form console
  function outputformconsole() {
    const logs = [];
    const customcode = {
      log: (...args) => {
        logs.push(args.join(" "));
      },
      error: (...args) => {
        logs.push("error " + args.join(" "));
      },
    };
    try {
      const func = new Function("console", compiledCode);
      func(customcode);
    } catch (error) {
      logs.push("Runtime Error: " + error.message);
    }
    setoutput(logs);
  }
  // copy function

  function Copy() {
    navigator.clipboard.writeText(compiledCode);
    setcopied(true);
    setCopiednotificatio(true);
    setTimeout(() => {
      setcopied(false);
      setCopiednotificatio(false);
    }, 2000);
  }
  // save function

  // register user function
  async function RegisterUser(email, password) {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        navigate("/");
      }
      console.log(user);

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  async function signUser(email, password) {
    try {
      const signinuser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");

      console.log(signinuser);
    } catch (error) {
      console.log(error);
    }
  }

  async function createwithgoogle() {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);

    console.log(user);
  }

  const value = {
    zoomin,
    setzoomin,
    zoomout,
    setzoomout,
    funczoomin,
    funczoomout,
    compiledCode,
    setcompiledCode,
    outputformconsole,
    output,
    Copy,
    copied,
    setcopied,
    Copiednotificatio,
    setCopiednotificatio,
    Newfileisopen,
    setNewfileisopen,
    isloginscreenopen,
    setisloginscreenopen,

    // 🔑 Sidebar states
    sidebarOpen,
    setSidebarOpen,
    toggleSidebar,
    RegisterUser,
    signUser,
    createwithgoogle,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
