import { createContext, useState } from "react";
import { auth } from "../config/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/Firebase";

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

  // userdata
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tagline, setTagline] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);
  function toggleSidebar() {
    setSidebarOpen((prev) => !prev);
  }

  function funczoomin() {
    setzoomin((prev) => prev + 2);
  }
  function funczoomout() {
    setzoomin((prev) => prev - 2);
  }

  function outputformconsole() {
    const logs = [];
    const customcode = {
      log: (...args) => logs.push(args.join(" ")),
      error: (...args) => logs.push("error " + args.join(" ")),
    };
    try {
      const func = new Function("console", compiledCode);
      func(customcode);
    } catch (error) {
      logs.push("Runtime Error: " + error.message);
    }
    setoutput(logs);
  }

  function Copy() {
    navigator.clipboard.writeText(compiledCode);
    setcopied(true);
    setCopiednotificatio(true);
    setTimeout(() => {
      setcopied(false);
      setCopiednotificatio(false);
    }, 2000);
  }

  async function RegisterUser(Email, Password) {
    try {
      const user = await createUserWithEmailAndPassword(auth, Email, Password);
      if (user) {
        await setDoc(doc(db, "users", user.user.uid), {
          uid: user.user.uid,
          name,
          email: Email,
          password: Password,
          description,
          tagline,
        });
        navigate("/");
      }
      return user;
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
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        await setDoc(doc(db, "users", result.user.uid), {
          uid: result.user.uid,
          name: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL || null,
          tagline,
          description,
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
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
    sidebarOpen,
    setSidebarOpen,
    toggleSidebar,
    RegisterUser,
    signUser,
    createwithgoogle,
    name,
    setName,
    description,
    setDescription,
    tagline,
    setTagline,
    email,
    setEmail,
    password,
    setPassword,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
