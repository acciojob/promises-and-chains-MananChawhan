document.getElementById('voteForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();

  if (name === "" || age === "") {
    alert("Please enter valid details.");
    return;
  }

  const ageNum = parseInt(age, 10);

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageNum >= 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000); // 4 seconds delay
  })
    .then((name) => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch((name) => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
