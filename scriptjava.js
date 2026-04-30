const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');


//Fonctionnalité du timer

let secondes = document.getElementById("chrono");
let stopBtn = document.getElementById("chrono");
let startBtn = document.getElementById("chrono");
let resetBtn = document.getElementById("chrono");

let secondes = 0;

