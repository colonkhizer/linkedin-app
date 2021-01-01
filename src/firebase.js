import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCumQr_PcWG28Q4rBtlY3-UEbIjlVaQHvo",
    authDomain: "linkedin-bf7c9.firebaseapp.com",
    projectId: "linkedin-bf7c9",
    storageBucket: "linkedin-bf7c9.appspot.com",
    messagingSenderId: "931949463276",
    appId: "1:931949463276:web:54e1497ae0194ad72ac7c9",
    measurementId: "G-M4ZWC2YB7J"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {auth , db}