import { signInWithEmailAndPassword } from "firebase/auth";
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "./firebase";
import { updateProfile } from "firebase/auth"; 

let loggedUser = {
    id: null,
    email: null,
};

let observers = [];

// Nos "suscribimos" a los cambios de la autenticación.
onAuthStateChanged(auth, user => {
    if(user) {
        loggedUser = {
            // En el usuario de Firebase Authentication, el id se llama uid.
            id: user.uid,
            email: user.email,
            displayName: user.displayName,
        }
    } else {
        loggedUser = {
            id: null,
            email: null,
            displayName: null,
        }
    }

    //Cambiaron los datos de la autenticacion, notificamos con observer
    notifyAll();
});

export async function login({email, password}) {
    // Tratamos de autenticar usando la función signInWithEmailAndPassword().
    // Recibe 3 parámetros:
    // 1. La instancia de Authentication.
    // 2. El email.
    // 3. El password.
    // Retorna una Promise que se resuelve con UserCredentials, y se rechaza
    //  si el login no es exitoso.
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log("Sesión iniciada con éxito: ", user);
    } catch (error) {
        console.error("[auth.js login] Error al tratar de iniciar sesión: ", error);
        throw error;
    }
}

/**
*@param {{displayName: Sting, bio: String, career: String}} data
*@returns {promise<null>}
*/

export async function editMyPerfile({displayName, bio ,career }){
    try{
        await updateProfile(auth.currentUser, {displayName});

        updateUserProfile(loggedUser.id, { displayName, bio, career });

        loggedUser = {
            ...loggedUser,
            displayName,
        }
        notifyAll();

    }catch(error){
        console.error('[auth.js editMyPerfile] Error al tratar de editar el perfil');
        throw error;
    }
}

export async function logout(){
    await singOut(auth);
}

/**---------------------------------
| Patrón de diseño : Observer
+----------------------------------
| Un patrón de diseño es una solución común de aplicar a un determinado problema.
| 
| Observer:
| Sirve para definir una relacion de uno a muchos entre elementos de sistema.
| "Subject" (sujeto)
| "Observes" (Observadores) : estan intere4sados de ser notificados de cambios o sucesos ocurrios en el sujeto.
| La idea de la implementacion es que el subject maneje el mayor parte.
+----------------------------------*/

/**
*@param {fuction} callback
*/

export function  subcribeToAuthChanges(callback){
    observers.push(callback);
    notify(callback);
}

/**
*@param {Fuction} callback
*/

function notify(callback){
    callback({...loggedUser});
}


function notifyAll(){
    observers.forEach(callback => notify(callback));
}