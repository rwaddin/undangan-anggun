import {app} from "@/firebase/init";
import {getDatabase, ref, child, get} from "firebase/database";

export const getOnce = (childName)=>{
  const dbRef = ref(getDatabase(app));
  return get(child(dbRef, childName)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return false;
    }
  }).catch(() => {
    // console.error(error);
    return false;
  });
}


