document.addEventListener("DOMContentLoaded", (event) => {
  const app = firebase.app();
  // console.log(app);
  const db = firebase.firestore();
  const myPost = db.collection("posts").doc("firstpost");

  myPost.onSnapshot((doc) => {
    const data = doc.data();
    // document.write(data.title + `<br>`);
    // document.write(data.createdAt + `<br>`);
    document.querySelector("#title").innerHTML = data.title;
  });
});

function updatePost(e) {
  const db = firebase.firestore();
  const myPost = db.collection("posts").doc("firstpost");
  myPost.update({ title: e.target.value });
}

// function googleLogin() {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then((result) => {
//       const user = result.user;
//       document.write(`Henlo ${user.displayName}`);
//       console.log(user);
//     })
//     .catch(console.log);
// }
