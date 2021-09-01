data = new Date();
dia = data.getDate();
numero_dia_semana = data.getDay() +1;
numero_mes = data.getMonth() +1;

var dom = 'Domingo,';
var seg = 'Segunda-feira,';
var ter = 'Terça-feira,';
var qua = 'Quarta-feira,';
var qui = 'Quinta-feira,';
var sex = 'Sexta-feira,';
var sab = 'Sábado,';

var jan = 'Janeiro';
var fev = 'Fevereiro';
var mar = 'Março';
var abr = 'Abril';
var mai = 'Maio';
var jun = 'Junho';
var jul = 'Julho';
var ago = 'Agosto';
var set = 'Setembro';
var out = 'Outubro';
var nov = 'Novembro';
var dez = 'Dezembro';

function semana(dia_semana) {
  if (dia_semana == 1) {
    return dom;
  }
  else if(dia_semana == 2){
      return seg;
  }
  else if(dia_semana == 3){
      return ter;
  }
  else if(dia_semana == 4){
      return qua;
  }
  else if(dia_semana == 5){
      return qui;
  }
  else if(dia_semana == 6){
      return sex;
  }
  else{
      return sab;
  }
}

function mes(numero_mes) {
  if (numero_mes == 1) {
    return jan;
  }
  else if(numero_mes == 2){
      return fev;
  }
  else if(numero_mes == 3){
      return mar;
  }
  else if(numero_mes == 4){
      return abr;
  }
  else if(numero_mes == 5){
      return mai;
  }
  else if(numero_mes == 6){
      return jun;
  }
  else if(numero_mes == 7){
      return jul;
  }
  else if(numero_mes == 8){
      return ago;
  }
  else if(numero_mes == 9){
      return set;
  }
  else if(numero_mes == 10){
      return out;
  }
  else if(numero_mes == 11){
      return nov;
  }
  else{
      return dez;
  }
}

function relogio() {
  let hoje = new Date();
  s = hoje.getSeconds();
  min = hoje.getMinutes();
  h = hoje.getUTCHours();

  if (h==0){
    h=21;
  } else if (h==1){
    h=22;
  } else if (h==2){
    h=23;
  } else {
    h-=3;
  }

  return (h < 10 ? ("0" + h) : h) + ':' + (min < 10 ? ("0" + min) : min);
}

document.getElementById('mensagem').innerHTML = semana(numero_dia_semana) + ' ' + dia + '/' + mes(numero_mes);
document.getElementById('relogio').innerHTML = relogio();

const searchEngines = {
  Google: 'https://www.google.com.br/search?q=',
  Duckduckgo: "https://duckduckgo.com/?q=",
  Brave: "https://search.brave.com/search?q=",
}

if (!Object.keys(searchEngines).includes(searchEngine)) {
    searchEngine = "Brave"
}

var searchEngine = 'Brave';

var searchUrl = searchEngines[searchEngine];

const searchField = document.getElementById("texto");
const clearFieldButton = document.getElementById("botao-apagar");

// Check searchbar for keystrokes
searchField.addEventListener("keyup", function(event) {

    // If there is some text in searchbar, display clear-field button
    if (searchField.value != "") {
        clearFieldButton.style.visibility = "visible";
    } else {
        clearFieldButton.style.visibility = "hidden";
    }

    // If last keystroke was "Enter" treat it as search-button is clicked
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("botao-pesquisar").click();

    }
});

// Clear text and keep searchbar in focus
function apagar() {
    searchField.value = "";
    clearFieldButton.style.visibility = "hidden";
    searchField.focus()
}

// Search query
function pesquisar() {
    if (searchField.value != "") {
        var val = searchField.value;
        window.open(searchUrl + val, "_self");
    }
    apagar();
}

// Show Scrollbar on scrolling
window.addEventListener('scroll', function showScrollbar(e) {
    if (e.target.classList.contains("visible-scrollbar") === false) {
        e.target.classList.add("visible-scrollbar");

        // Hide Scrollbar after 1.5s
        setTimeout(hideScrollbar, 1500, e);
    }
}, true);

// Hide Scrollbar
function hideScrollbar(e) {
    e.target.classList.remove("visible-scrollbar");
}
