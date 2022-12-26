"use strict";

var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Constraint = Matter.Constraint;
var engine, world;
var canvas;
var player1, player2, player3, player4;
var angle;
var arroor;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  player1 = new Player(300, 900, 200, 400);
  player2 = new Computerr(700, 900);
  player3 = new bASE(300, 1000);
  player4 = new Computrr43(1000, 650);
  angle = PI / 4;
  arroor = new Aroor(300, 350, 200, 300, angle);
}

function draw() {
  background(189);
  player4.display();
  player3.display();
  player1.display();
  player2.display();
  arroor.display();
  Engine.update(engine);
}