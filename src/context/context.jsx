// this is a context api yahan per saari states manage hongi

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
import { tr } from "motion/react-client";
import profileIcon from "..//assets/images/images (8).jpg";
import { useCallback } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const navigate = useNavigate();

  // zoom states
  const [zoomin, setzoomin] = useState(14);
  const [zoomout, setzoomout] = useState(zoomin);

  // editor states
  const [compiledCode, setcompiledCode] = useState("");
  const [output, setoutput] = useState([]);
  const [Copiednotification, setCopiednotification] = useState(false);
  const [copied, setcopied] = useState(false);
  const [Newfileisopen, setNewfileisopen] = useState(false);
  const [searchfilter, setsearchfilter] = useState("");
  const [switchcompiler, setswitchcompiler] = useState(true);

  // auth states
  const [isloginscreenopen, setisloginscreenopen] = useState(false);
  const [profiledata, setprofiledata] = useState(null);
  const [filename, setfilename] = useState("Untiteled");
  const [files, setfiles] = useState([]);
  const [autherrormessage, setautherrormessage] = useState("");
  const [filterdfiles, setfilterdfiles] = useState([]);
  // user profile states
  const [profileimage, setprofileimage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tagline, setTagline] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // images
  const images2 = [
    "https://i.pinimg.com/736x/09/0b/bc/090bbcffd9c72bc9dbcc34506b7cdcc4.jpg",
    "https://i.pinimg.com/736x/93/45/99/9345996e1e296767510032db258246c3.jpg",
    "https://i.pinimg.com/736x/de/15/ed/de15edf52f6f585678a431cef555c276.jpg",
    "https://i.pinimg.com/736x/f8/cb/da/f8cbdae7c4ceaba6d4184f9ec34f4935.jpg",
    "https://i.pinimg.com/736x/ef/4f/98/ef4f982361420e1921bedac60c6598d4.jpg",
    "https://i.pinimg.com/736x/0f/f2/75/0ff2756ca177662da9d0b31dc9d2296b.jpg",
    "https://i.pinimg.com/736x/b7/73/27/b77327bb3e150b2d21e5a3a4acf2dbcb.jpg",
    "https://i.pinimg.com/736x/93/83/77/938377275ba8cac595f0edf49c8c7ef6.jpg",
    "https://i.pinimg.com/1200x/c0/9c/32/c09c3258c6fd06fd508aa3e65eca17c4.jpg",
    "https://i.pinimg.com/736x/af/7b/1d/af7b1def0a0788d8d70de426fd61533f.jpg",
    "https://i.pinimg.com/736x/74/30/00/743000d16443ec6a8967347c2577aeb8.jpg",
    "https://i.pinimg.com/736x/d4/3c/92/d43c927fe42fd2fe08a794f04101e36c.jpg",
  ];
  const randomIndex = Math.floor(Math.random() * images2.length);
  const randomImage = images2[randomIndex];

  // sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);
  function toggleSidebar() {
    setSidebarOpen((prev) => !prev);
  }

  // zoom
  function funczoomin() {
    setzoomin((prev) => prev + 3);
  }
  function funczoomout() {
    setzoomin((prev) => prev - 3);
  }

  async function putdatainnewfiledata() {
    setNewfileisopen(false);
    if (compiledCode === "") {
      return;
    } else {
      if (profiledata) {
        const userui = profiledata.uid;
        const newfile = {
          id: Date.now(),
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
  }

  // save new file in Firestore

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
    setCopiednotification(true);
    setTimeout(() => {
      setcopied(false);
      setCopiednotification(false);
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
          profileIMG: profileimage || randomImage || profileIcon,
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
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        setautherrormessage(
          "Email already in use. Please use a different email."
        );
      }
      if (
        error.message ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
      ) {
        setautherrormessage("Password should be at least 6 characters.");
      }
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        setautherrormessage(
          "Invalid email format. Please enter a valid email."
        );
      }
      return null;
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
      if (error.code === "auth/invalid-credential") {
        setautherrormessage("Invalid credentials. Please try again.");
      } else {
        setautherrormessage("Something went wrong. Please try again later.");
      }
    }
  }

  // google auth
  async function createwithgoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      if (result.user) {
        setisloginscreenopen(false);
        console.log("hi");


        await setDoc(
          doc(db, "users", result.user.uid),
          {
            uid: result.user.uid,
            name: result.user.displayName,
            email: result.user.email,
            profileIMG: result.user.photoURL,
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
    Copiednotification,
    setCopiednotification,
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
    setfiles,
    searchfilter,
    setsearchfilter,
    switchcompiler,
    setswitchcompiler,
    autherrormessage,
    setautherrormessage,
    filterdfiles,
    setfilterdfiles,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
