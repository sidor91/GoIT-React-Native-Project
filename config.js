// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCGXO-YBJmbNnPjim2tpAB8yLaTCZNd-kM",
	authDomain: "react-native-social-app-e6242.firebaseapp.com",
	databaseURL:
		"https://react-native-social-app-e6242-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "react-native-social-app-e6242",
	storageBucket: "react-native-social-app-e6242.appspot.com",
	messagingSenderId: "209875828741",
	appId: "1:209875828741:web:d81e2c73a6d1e859739c6c",
	measurementId: "G-SYWPZK2E8D",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
