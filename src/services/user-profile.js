import { doc, getDoc } from "firebase/firestore";

export async function updateUserProfile(id, {displayNme, career, bio}){
    const profileRef = dic(db,'/users/${id');

    await updateDoc(profileRef, {
        displayNme,
        bio,
        career,
    });
}


export async function getUserProfileById (id){
    const profileRef = doc(db,  `[/users/$(id)]`); 
    const profileDocument =  await getDoc(profileRef);

}return {
    id: profileDocument.id, 
    email: profileDocument.data().email,
    displayNme: profileDocument.data().displayNme, 
    career: profileDocument.data().career,
bio: profileDocument.data().bio,

}
