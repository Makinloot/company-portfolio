import { auth } from "../config/firebase.js";
async function userState(req, res) {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log(`user data sent`);
      res.send(user);
    } else {
      console.log(`user signed out`);
      res.send(`user not logged in`);
    }
  });
}

export { userState };
