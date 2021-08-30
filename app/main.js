import Alligator from "./models/Alligator.js"
import Baboon from "./models/Baboon.js"
import Cougar from "./models/Cougar.js"
import Deer from "./models/Deer.js"
import Eagle from "./models/Eagle.js"
import Fox from "./models/Fox.js"
import Gecko from "./models/Gecko.js"
import Hagfish from "./models/Hagfish.js"
import Ibex from "./models/Ibex.js"
import Jaguar from "./models/Jaguar.js"
import Kangaroo from "./models/Kangaroo.js"
import Lion from "./models/Lion.js"
import Moose from "./models/Moose.js"
import Narwhal from "./models/Narwhal.js"
import Octopus from "./models/Octopus.js"
import PolarBear from "./models/PolarBear.js"
import Quail from "./models/Quail.js"
import Rhinoceros from "./models/Rhinoceros.js"
import Shark from "./models/Shark.js"
import Tiger from "./models/Tiger.js"
import Uakari from "./models/Uakari.js"
import Vulture from "./models/Vulture.js"
import Warthog from "./models/Warthog.js"
import Xerus from "./models/Xerus.js"
import Yak from "./models/Yak.js"
import Zebra from "./models/Zebra.js"




let ally = new Alligator("Ally", "Green", "F", 800, 60, "big")
let baboo = new Baboon("Baboo", "Grey", "M", 65, 24, "big")
let coug = new Cougar("Coug","Tan", "F", 300, 48, "big");
let bam = new Deer("Bambie", "Brown with white spots", "F", 25, 2, "tiny")
let bald = new Eagle("Baldy", "Brown with white head", "M", 80, 24, "beek")
let fox = new Fox("Roxy", "Red", "F", 25, 24, "small")
let gec = new Gecko("Geico", "Transfromable", "M", 1, 2, "tiny")
let hag = new Hagfish("Hagred", "Grey", "M", 3, 4, "tiny")
let bex = new Ibex("Bexy", "black and brown", "F", 85, 4, "small")
let jag = new Jaguar("Mic Jaguar", "Black", "M", 320, 56, "big")
let kang = new Kangaroo("Jack", "Tan", "M", 150, 36, "small")
let lion = new Lion("Simba", "Tan", "M", 500, 36, "big")
let moo = new Moose("Tina", "Brown", "F", 1300, 12, "big")
let nar = new Narwhal("Babe", "Grey", "F", 7000, 60, "big")
let oct = new Octopus("Taz", "Transfromable", "M", 15, 24*8, "beek")
let pol = new PolarBear("Bear", "White", "F", 1700, 6, "big")
let quay = new Quail("Qbert", "Grey", "M", 2, 4, "beek")
let rhino = new Rhinoceros("Dino", "Grey", "M", 4500, 24, "big")
let shark = new Shark("Steve", "Grey and white", "M", 5000, 48, "big")
let tig = new Tiger("Tony", "Striped orange", "M", 650, 60, "big")
let mon = new Uakari("KoJo", "Brown with red face", "F", 30, 24, "small")
let vul = new Vulture("Bruh", "Black", "M", 120, 13, "beek")
let war = new Warthog("H-nasty", "Brown", "M", 175, 9, "big")
let xer = new Xerus("Grul", "Brown", "F", 2, 8, "tiny")
let yak = new Yak("Kay", "Black", "F", 3500, 24, "big")
let zee = new Zebra("Zeba", "Black and white", "F", 800, 24, "small")

let animals = [ally, baboo, coug, bam, bald, fox, gec, hag, bex, jag, kang, lion, moo, nar, oct, pol, quay, rhino, shark, tig, mon, vul, war, xer, yak, zee]

let largeAnimals = animals.push(ally, coug, jag, lion, moo, nar, pol, rhino, shark, tig, yak, zee)

console.log(largeAnimals)

