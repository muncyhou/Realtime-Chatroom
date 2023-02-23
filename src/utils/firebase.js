// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, push, child } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIY1INg7k-gwxK7qxm2CLqZMMRx05krhQ",
  authDomain: "fir-vue-realtime-chatroo-ed0e3.firebaseapp.com",
  databaseURL:
    "https://fir-vue-realtime-chatroo-ed0e3-default-rtdb.firebaseio.com",
  projectId: "fir-vue-realtime-chatroo-ed0e3",
  storageBucket: "fir-vue-realtime-chatroo-ed0e3.appspot.com",
  messagingSenderId: "96546249534",
  appId: "1:96546249534:web:b4cbd0f11ef818b8c5ea6f",
  measurementId: "G-8PQM6H2MLF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const chatroomRef = ref(database, "chatroom");

export function writeUserMsg(userName, msg, time) {
  const { key } = push(chatroomRef);

  set(child(chatroomRef, key), {
    key,
    userName,
    msg,
    time,
  });
}

export async function getRealTimeUserData(realTimeUserData) {
  onValue(chatroomRef, (snapshot) => {
    realTimeUserData.value = snapshot.val();
  });
}
