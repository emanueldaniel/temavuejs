import Vue from 'vue';

const $ = require('jquery');

global.$ = global.jQuery = $;

require("../scss/main.scss");
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');

var exercise = new Vue({
    el: '#exercise',
    data: {
        age: 20,
        name: 'Hepes Daniel',
        img: "<img style='width:100px;height:100px' src='http://www.hopa.ro/poze/mare/leu_1238405474.jpg'>",
        text: 'Daniel',
        counter: 100,
        adder: 0,
    },
    methods: {
        randomFloat: function () {
            return Math.random() * 100;
        },
        incrementValue() {
            this.counter+=Number(this.adder);
        },
        decrementValue() {
            this.counter-=Number(this.adder);
        },
    }

});

var jsapp = new Vue(
    {
        el: '#js-app',
        data: {
            message: 'Hello World!',
            title: 'Test Title x',
            link: 'http://google.com',
            fullhref: "<a href='http://yahoo.com'>Yahoo</a>",
            x: 0,
            y: 0,
            note: [
                { nota: '5' },
                { nota: '7' }
            ],
            noteObj: [
                {
                    firstName: 'Paul',
                    lastName: 'Barna',
                    nota: 7
                },
                {
                    firstName: 'Vasile',
                    lastName: 'X',
                    nota: 10
                },
               
            ]
        },
        methods: {
            changeText: function () {
                this.message = "Hi x-ulescu";
            },
            sayHello: function () {
                return this.title;
            },
            mPosition: function (event) {
                this.x = event.clientX;
                this.y = event.clientY;
            },
            alertMe: function(event) {
                alert(event.target.value);
            }
        }
    }
);  

var jsapp = new Vue(
    {
        el: '#exercise2',
       data:{
           value:'',
       },
        methods: { 
            alert:function(){
                alert("Totul are un inceput")
            },
            keydown:function(event){
                this.value=event.target.value;

            }

        }
        
    }
);