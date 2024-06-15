import { getDatabase, onValue, push, ref, set } from "firebase/database"
import app from "./FireBaseConfig";


//Here we are sending data to the firebase dataBase
const db = getDatabase(app);
export const sendData = (nodeName:string, data:any)=>{

     data.uid = push(ref(db, `${nodeName}`)).key
    const reference = ref(db,`${nodeName}/${data.uid}`)
    
    set(reference,data )
}

//Now here we wil getData back to render it in the UI

export const getData = (nodeName:string, func:(d:any)=>void, uid?:any)=>{

    const reference = ref(db, `${nodeName}/${uid? uid:''}`);
onValue(reference,(snap)=>{
console.log(snap.val());

const arrData = Object.values(snap.val());
console.log(arrData)
func(arrData)
})

}



//NOw chat gpt approach

// export const getData = (nodeName: string, callback: (dat: any) => void, id?: any) => {
//     const reference = ref(db, `${nodeName}/${id ? id : ""}`);
//     onValue(reference, (snapShot) => {
//       const data = snapShot.val();
//       const arr = data ? Object.values(data) : [];
//       callback(arr);
//     });
//   };