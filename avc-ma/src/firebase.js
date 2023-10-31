
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCy35hvtYQ_XdK-LWSPbSL9xMV9e39S16E",
  authDomain: "avcma-c1b6f.firebaseapp.com",
  projectId: "avcma-c1b6f",
  storageBucket: "avcma-c1b6f.appspot.com",
  messagingSenderId: "50061980655",
  appId: "1:50061980655:web:0f891671264a1cc1ecbc1a",
  databaseURL: "https://avcma-c1b6f-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);