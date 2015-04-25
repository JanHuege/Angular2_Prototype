/**
 * Created by Jan on 24.04.2015.
 */
// TODO FIX angular2 definition files .d.ts
import {Component} from 'angular2/angular2';
//import angular2 = require('../node_modules/angular2/angular2')

class Person{

    firstName = "Jan";
    lastName = "Huege";
    age = "21";

    attack(){
        console.log("Yo!");
        this.firstName = "Christina";
        this.lastName = "Braun";
        this.age = "22";
    }

    foo(){
        console.log(this);
    }

    change(){
        console.log("TEST1234");
    }
}