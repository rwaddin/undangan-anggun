import { getDatabase, ref, onChildAdded } from "firebase/database";
import {app} from "@/firebase/init";

export const rsvpListenAdded = (child) =>{
  const db = getDatabase(app);
  const commentsRef = ref(db, child);
  return onChildAdded(commentsRef, (data) => {
    //addCommentElement(postElement, data.key, data.val().text, data.val().author);
    return data;
  });
}