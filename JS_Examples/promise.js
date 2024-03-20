let p = new Promise((resolve, reject) => {
  let marks = 30; //out of 100
  if (marks >= 35) {
    resolve("Successful");
  } else {
    reject("Failed");
  }
});

//then,catch

p.then((response) => {
  console.log(response);
}).catch((err) => {
  console.log(err);
});
