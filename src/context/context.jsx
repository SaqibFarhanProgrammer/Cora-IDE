import { createContext, useEffect, useRef, useState } from "react";
import { auth, db } from "../config/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const Context = createContext();

export const Provider = ({ children }) => {
  const navigate = useNavigate();

  // zoom states
  const [zoomin, setzoomin] = useState(14);
  const [zoomout, setzoomout] = useState(zoomin);

  // editor states
  const [compiledCode, setcompiledCode] = useState("");
  const [output, setoutput] = useState([]);
  const [Copiednotificatio, setCopiednotificatio] = useState(false);
  const [copied, setcopied] = useState(false);
  const [Newfileisopen, setNewfileisopen] = useState(false);

  // auth states
  const [isloginscreenopen, setisloginscreenopen] = useState(false);
  const [profiledata, setprofiledata] = useState(null);
  const [filename, setfilename] = useState("Untiteled");
  const [files, setfiles] = useState([]);

  // user profile states
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

  // zoom
  function funczoomin() {
    setzoomin((prev) => prev + 2);
  }
  function funczoomout() {
    setzoomin((prev) => prev - 2);
  }

  // save new file in Firestore
  async function putdatainnewfiledata() {
    setNewfileisopen(false);
    if (profiledata) {
      const userui = profiledata.uid;
      const newfile = {
        code: compiledCode || "No Code Here.....",
        extension: "js",
        title: filename,
        createdAt: new Date().toISOString(),
      };
      try {
        await updateDoc(doc(db, "users", userui), {
          files: arrayUnion(newfile),
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  async function getfilefromfirebase() {
    if (profiledata?.uid) {
      const userRef = doc(db, "users", profiledata.uid);
      const snap = await getDoc(userRef); // pehle await yahan

      const data = snap.data();
      setfiles(data.files);
    }
  }

  useEffect(() => {
    getfilefromfirebase();
  }, [profiledata]);

  // run console code
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

  // copy code
  function Copy() {
    navigator.clipboard.writeText(compiledCode);
    setcopied(true);
    setCopiednotificatio(true);
    setTimeout(() => {
      setcopied(false);
      setCopiednotificatio(false);
    }, 2000);
  }

  // register user
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
          files: [
            {
              title: "untitled",
              code: "console.log('hello')",
              extension: "js",
            },
          ],
        });
        navigate("/");
      }
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  // sign in
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

  // google auth
  async function createwithgoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      if (result.user) {
        setisloginscreenopen(false);

        await setDoc(
          doc(db, "users", result.user.uid),
          {
            uid: result.user.uid,
            name: result.user.displayName,
            email: result.user.email,
            photoURL: result.photoURL || null,
            tagline,
            description,
          },
          { merge: true }
        );
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  // fetch user data
  function fetchdata() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(docRef);

          if (userDoc.exists()) {
            setprofiledata(userDoc.data());
            setisloginscreenopen(false);
          } else {
            console.log("No user data found in Firestore");
            setprofiledata(null);
            setisloginscreenopen(true);
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
          setprofiledata(null);
          setisloginscreenopen(true);
        }
      } else {
        console.log("No user logged in");
        setprofiledata(null);
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
    setfilename,
    filename,
    putdatainnewfiledata,
    files,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
