/**
 * Created by Niko on 12.09.2017.
 */
let b = "World";
let c = `Hello ${b}`;
console.log(c);

let a = [1,2,3];
let x = [...a,4,5];
console.log(x);

function print(a,b,c) {
    console.log(a,b,c);
}

let z = [1,2,3];
print(...z);

function printSpread(...z) {
    console.log(z)
}

printSpread(1,2,3,4);

let d = [100,200];
let [e,f] = d;
console.log(e,f);

let fellowship = ["Frodo","Gandald","Aragorn","Gimli"];
let [hobbit,wizard,...friends] = fellowship;
console.log(hobbit,wizard,...friends);

let sorcerer = {magical:true,power:10};
let {magical,power} = sorcerer;
console.log(magical,power);

let arrows = false;
let king = false;

let ranger= {
    arrows:true,
    king:true
};
({arrows,king} = ranger);
console.log(arrows,king);

setTimeout(()=>{console.log("hello");},0);

let add = (a,b) => {console.log(a + b);};
add(1,2);


let arr = [1,2,3];

let addOne = (element) => {
    return element +1;
}

arr = arr.map(addOne);

arr = arr.map(element =>  element +1);

console.log("MYARR",arr);

// FILTER function

let grades = [99,55,77];
// let gradesFiltered = grades.filter(function(el){
//     return el >=70;
// })
//let gradesFiltered = grades.filter((element) => { return element >= 70});
let gradesFiltered = grades.filter(element => element >= 70);
console.log("passed grades",gradesFiltered);

import {wg} from "./wg.js";

console.log(wg);

import Entity from "./Entity.js";

let merry = new Entity("Merry",4.8);
merry.greet();

class Hobbit extends Entity {
    constructor(name,height){
        super(name,height);
    }
    greet() {
        console.log(`Hi im ${this.name} from the Shire.`)
    }
}

let frodo = new Hobbit("Frodo",4.3);
frodo.greet();

import React, {Component} from "react";
import ReactDOM from "react-dom";

const api_key = "1f50b38c99061880037704f370152a20";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            "city":"Stuttgart"
        }
    }

    componentDidMount(){

        this.grabWeather(this.state.city);

    }
    grabWeather(city){
        fetch(`http://samples.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city},uk&appid=b1b15e88fa797225412429c1c50c122a1`);
    }

    render(){
        return (

            <div>React Hello World</div>

        )
    }
}

ReactDOM.render(<App></App>,document.getElementById("root"));