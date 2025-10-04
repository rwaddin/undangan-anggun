import {app} from "@/firebase/init";
import { getDatabase, ref, push } from "firebase/database";

export const rsvpCreate = (childName, params) =>{
  const db = getDatabase(app);
  return push(ref(db, childName), params);
}