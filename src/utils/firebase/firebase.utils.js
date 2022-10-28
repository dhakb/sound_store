import {initializeApp} from "firebase/app";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut
} from "firebase/auth"

import {collection, doc, getDoc, getFirestore, query, setDoc, writeBatch, getDocs} from "firebase/firestore";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByv9-1M9o35bA4oox2cAcfnZYAwvBzac0",
    authDomain: "sound-store-57e95.firebaseapp.com",
    projectId: "sound-store-57e95",
    storageBucket: "sound-store-57e95.appspot.com",
    messagingSenderId: "353693127650",
    appId: "1:353693127650:web:ae1f1540d7991dcaea1fbb",
    measurementId: "G-BHYHDXLQF8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Configure Firestore Database
const db = getFirestore()


// ============================== Authentication Set Up  =====================================


const auth = getAuth()

// Set up SignUp with Google
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)


// Create user with Email and Password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}


// Sign in user with Email and Password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}


// Create user Doc after Auth (add user to collection on firebase store)
export const createUserDocFromAuth = async (userAuth) => {
    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)


    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (err) {
            console.log("Error occurred while creating user")
        }
    }

    return userDocRef
}

// SignOut user
export const signOutUser = async () => {
    return await signOut(auth)
}

// User change listener
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)


// ============================== Firestore Database Set Up  =====================================


// Add (create) Collection and Documents
export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)
    objectsToAdd.forEach(obj => {
        const docRef = doc(collectionRef, obj.title.toLowerCase())
        batch.set(docRef, obj)
    })

    await batch.commit()
}


// Get Categories and Documents
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, "categories")
    const q = query(collectionRef)

    const categoriesSnapshot = await getDocs(q)
    const categoryMap = categoriesSnapshot.docs.reduce((total, docSnapshot) => {
        const {title, items} = docSnapshot.data()

        total[title.toLowerCase()] = items
        return total
    }, {})

    return categoryMap
}












