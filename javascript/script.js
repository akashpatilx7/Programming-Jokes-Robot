const button = document.getElementById('btn');

function getJokes() {
  fetch('https://official-joke-api.appspot.com/jokes/programming/random')
  // NOTE : FETCHED A RANDOM PROGRAMMING JOKE API 
  // In the above line of code, use a fetch method to fetch a Random Joke Telling API.

  // The above written Fetch Method returns a promise, so we need to handle it as described below.
  .then(res => res.json())
  // As we are getting the required information in another format & we need to convert it into JSON Format.
  // This conversion of Information to JSON again returns a promise. So, we will have to handle it, once again.
  .then(data => {
    const jokes = data[0];
    getJoke(jokes);
  })
}

function getJoke(jokes) {
  const setup = jokes.setup;
  const punchline=jokes.punchline;
  const joke=setup + punchline;
  setTextMessage(joke);
  speakText();
}

// Init Speech 
const message=new SpeechSynthesisUtterance();

// Set Text 
function setTextMessage(text){
  message.text=text;
}

function speakText(){
  speechSynthesis.speak(message);
}
// Added Event Listeners
button.addEventListener('click', getJokes
);