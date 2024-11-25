let btnStart = document.getElementById('start');
let btnStop = document.getElementById('stop');
let btnReset = document.getElementById('reset');

let heuresElement = document.getElementById('heures');
let minutesElement = document.getElementById('minutes');
let secondesElement = document.getElementById('secondes');

let timer;
let tempsQuiPasse = 0;



function MajTemps() {
    let heuresCalcul = Math.floor(tempsQuiPasse / 3600);
    let minutesCalcul = Math.floor((tempsQuiPasse % 3600) /60);
    let secondesCalcul = tempsQuiPasse % 60;


    heuresElement.textContent = heuresCalcul.toString().padStart(2, '0');
    minutesElement.textContent = minutesCalcul.toString().padStart(2, '0');
    secondesElement.textContent = secondesCalcul.toString().padStart(2, '0');
}


btnStart.addEventListener('click',() => {
    if(!timer){
    timer = setInterval (() => {
        tempsQuiPasse++;
        MajTemps();
    }, 1000);
    }}
);

btnStop.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

btnReset.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    tempsQuiPasse = 0;
    MajTemps();
})




