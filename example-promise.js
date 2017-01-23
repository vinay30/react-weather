// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback("City not found");
// }
//
// getTempCallback("Philly", function(err, temp) {
//   if(error) {
//     console.log(error);
//   }
// });

function addPromise (a, b) {
  return new Promise(
    function(resolve, reject) {
      if(typeof a === 'number' && typeof b === 'number') {
        let result = a*b;
        resolve(result);
      } else {
        reject("Not a number!");
      }
    }
  );
}

addPromise(1, "a")
.then(function(result) {
  console.log("Promise success " + result);
}, function(err) {
  console.log("Promise error " + err);
});

addPromise(1, 2)
.then(function(result) {
  console.log("Promise success " + result);
}, function(err) {
  console.log("Promise error " + err);
});
