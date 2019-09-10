//wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));





const wait = (ms) => {
    return  new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve()
        },ms)

    });

    // return myPromise;
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// fetch("https://swapi.co/api/people/1")
//     .then((response) => {
//         return response.json();
//     }).then((data) => {
//     console.log(data);
// }).catch(console.log);



function getLastCommit  (userName) {
  return  fetch('https://cors-anywhere.herokuapp.com/https://api.github.com/users/' + userName + '/events/public', {
        headers: {
            "authorization": "token "+ gitHubKey,
            "method": "Get"
        }
    }).then(response => response.json()) .then(response => response[0].created_at)

}
console.log(getLastCommit("glitch78"));




