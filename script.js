console.log("Hello world!");

// se a pessoa quiser jogar, iniciar o jogo (dúvidas sobre isto - como fazer?)
// if (confirm("Howdy! Let's play?") == true) {
//   name = true;
// } else {
//   name = false;
// }

confirm("Howdy! 👋 Let's play?");

var name = prompt("What's your name?");

var season = prompt("What's your favourite season of the year? (ex. summer)");

var seasonDB = new Array();

//Fiz a criação do Array desta forma mais extensa porque sem a atribuição manual das posições não resultava
seasonDB[0] = "winter";
seasonDB[1] = "spring";
seasonDB[2] = "summer";
seasonDB[3] = "autumn";

var animal = "penguin";

// A var 'animal' é alterada consoante a resposta do user
if (season == seasonDB[0]) {
  var animal = "penguin";
} else if (season == seasonDB[1]) {
  var animal = "giraffe";
} else if (season == seasonDB[2]) {
  var animal = "monkey";
} else if (season == seasonDB[3]) {
  var animal = "panda";
};

var food = prompt("What's your favourite food? (ex. lasagna)");

var celeb = prompt("Who's your favourite celebrity? (ex. Barack Obama)");

var travel = prompt("What continent would you love to travel to? (ex. asia)");

var continent = new Array();
continent[0] = "europe";
continent[1] = "africa";
continent[2] = "asia";
continent[3] = "oceania";
continent[4] = "north america";
continent[5] = "south america";

// É já definida a var caso algum erro de escrita não comprometa o resultado final
var country = "New Zealand";

// É atribuído um país consoante o continente de escolha
if (travel == continent[0]) {
  var country = "Italy";
} else if (travel == continent[1]) {
  var country = "Egypt";
} else if (travel == continent[2]) {
  var country = "Thailand";
} else if (travel == continent[3]) {
  var country = "New Zealand";
} else if (travel == continent[4]) {
  var country = "Canada";
} else if (travel == continent[5]) {
  var country = "Colombia";
};

var day = prompt("What day of the month were you born? (ex. 21)");

var birthday = "alien researchers";

if (day < 5) {
  var birthday = "dolphins";
} else if (day >= 5 && day < 10)  {
  var birthday = "salsa dancers";
} else if (day >= 10 && day < 15) {
  var birthday = "monks";
} else if (day >= 15 && day < 20) {
  var birthday = "grandkids";
} else if (day >= 20 && day < 25) {
  var birthday = "alien researchers";
} else if (day >= 25 && day < 31) {
  var birthday = "metalheads";
};

alert("WARNING: Incoming message from the Future!")


//Alterar o texto mediante as respostas
document.querySelector(".name").innerText = name;
document.querySelector(".animal").innerText = animal;
document.querySelector(".food").innerText = food;
document.querySelector(".celeb").innerText = celeb;
document.querySelector(".country").innerText = country;
document.querySelector(".birthday").innerText = birthday;

//Solução encontrada para revelar o texto no final
document.querySelector(".text").style.color = 'white';
