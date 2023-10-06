import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";
import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyBERxZm2GtBdIXOf8pSKRu474TM887CT78",
  authDomain: "termofusion.firebaseapp.com",
  projectId: "termofusion",
  storageBucket: "termofusion.appspot.com",
  messagingSenderId: "360171212097",
  appId: "1:360171212097:web:a95967193aeb370453a5c0",
  measurementId: "G-61ZG15VTQE"
};

initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
