import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import app from "./FireBaseConfig";

//Here we are sending data to the firebase dataBase
const db = getDatabase(app);
export const sendData = (nodeName: string, data: any) => {
  return new Promise((resolve, reject) => {
    data.uid = push(ref(db, `${nodeName}`)).key;
    const reference = ref(db, `${nodeName}/${data.uid}`);

    set(reference, data)
      .then(() => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//Now here we wil getData back to render it in the UI and this is wrong approach as per SIR BASIT

// export const getData = (nodeName:string, func:(d:any)=>void, uid?:any)=>{

//     const reference = ref(db, `${nodeName}/${uid? uid:''}`);
// onValue(reference,(snap)=>{
// console.log(snap.val());

// const arrData = Object.values(snap.val());
// console.log(arrData)
// func(arrData)
// })

// }

//NOw chat gpt approach

// export const getData = (nodeName: string, callback: (dat: any) => void, id?: any) => {
//     const reference = ref(db, `${nodeName}/${id ? id : ""}`);
//     onValue(reference, (snapShot) => {
//       const data = snapShot.val();
//       const arr = data ? Object.values(data) : [];
//       callback(arr);
//     });
//   };

// SIr ki promise wali approach EID KA BAD WALI CLASS MAIN

export const getData = (nodeName: string, uid?: any) => {
  return new Promise((resolve, reject) => {
    const reference = ref(db, `${nodeName}/${uid ? uid : ""}`);
    onValue(reference, (snap) => {
      if (snap.exists()) {
        // resolve(snap.val())

        if (uid) {
          resolve(snap.val());
        } else {
          resolve(Object.values(snap.val()));
        }
      } else {
        reject({ message: "Data not found" });
      }
      // console.log(snap.val());
    });
  });
};

export const editData = (nodeName: string, uid: any, body: any) => {
  return new Promise((resolve, reject) => {
    const reference = ref(db, `${nodeName}/${uid}`);
    set(reference, body)
      .then(() => {
        resolve({ message: "Record edited Successfully" });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const delData = (nodeName: string, uid: any) => {
  return new Promise((resolve, reject) => {
    const reference = ref(db, `${nodeName}/${uid}`);
    remove(reference)
      .then(() => {
        resolve("Record deleted");
      })
      .catch((err) => {
        reject(err);
      });
  });
};
