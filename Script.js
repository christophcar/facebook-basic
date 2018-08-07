
// Create database array that holds credentials of users

var database = [
  {
    username: "sophie",
    password: "secret1",
  },
  {
    username: "asad",
    password: "secret2",
  },
  {
    username: "christoph",
    password: "secret3",
  }
];

// Create newsfeed array that holds information of users

var newsfeed = [
  {
    username: "sophie",
    timeline: "i love yoga!"
  },
  {
    username: "asad",
    timeline: "i love apartments!"
  },
  {
    username: "christoph",
    timeline: "i love coding!"
  }
];

// Check if username and password is valid

function isUserValid(username, password) {
  for (var=i; i < database.length; i++) {
    if(database[i].username === username && database[i].password === password) {
      return true;
    }
  } return false;
}

// Function that checks if userdata are correct with function declaration

function signIn(username, password) {
    if (isUserValid(username, password)) {
      console.log(newsfeed);
    } else {
      alert("Your username and/or password is not correct. Please try again!");
    }
}

// Function that prompts user information with function expression

var checkUser = prompt("What\'s your username?");
var checkPassword = prompt("What\'s your password?");

signIn(checkUser, checkPassword);
