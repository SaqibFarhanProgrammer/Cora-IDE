import { createContext, useEffect, useState } from "react";
import { auth } from "../config/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
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
  const [isloginscreenopen, setisloginscreenopen] = useState(false);
  const [profiledata, setprofiledata] = useState(null);
  const [filename, setfilename] = useState("Untiteled");
  const [newfiledata, setnewfiledata] = useState([
    {
      title: "app.js",
      code: 'console.log("hello")',
      extention: "js",
    },
  ]);

  // userdata
  const [profileimage, setprofileimage] = useState("");
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

  function putdatainnewfiledata() {
    setNewfileisopen(false);
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
        setisloginscreenopen(false);
        await setDoc(doc(db, "users", user.user.uid), {
          uid: user.user.uid,
          profileIMG: profileimage,
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
      if (signinuser) {
        setisloginscreenopen(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function createwithgoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result.user.displayName);

      if (result.user) {
        setisloginscreenopen(false);

        await setDoc(doc(db, "users", result.user.uid), {
          uid: result.user.uid,

          name: result.user.displayName,
          email: result.user.email,
          photoURL: result.photoURL || null,
          tagline,
          description,
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function fetchdata() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(docRef);

          if (userDoc.exists()) {
            setprofiledata(userDoc.data());
            setisloginscreenopen(false);
            setprofiledata(userDoc.data());
          } else {
            console.log("No user data found in Firestore");
            setprofiledata(null); // reset
            setisloginscreenopen(true);
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
          setprofiledata(null); // reset
          setisloginscreenopen(true);
        }
      } else {
        console.log("No user logged in");
        setprofiledata(null); // reset
        setisloginscreenopen(true);
      }
    });
  }

  useEffect(() => {
    fetchdata();
  }, []);

  function signout() {
    signOut(auth);
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
    setprofileimage,
    profiledata,
    profileimage,
    signout,
    newfiledata,
    setnewfiledata,
    setfilename,
    filename,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
