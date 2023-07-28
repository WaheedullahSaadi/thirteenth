let countEl = document.getElementById("count-el")
let tempEl = document.getElementById('temp');
let count = 0

let addition = 0;

function reset() {
    addition = 0;
    tempEl.innerText = addition;

}


function add(){
    addition+=1;
    document.getElementById('temp').innerText = addition;
}

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}

function welcome(){
    document.getElementById('count-el').innerText='Asalamualaikum';
    document.getElementById('temp').innerText='changed from function';

}
