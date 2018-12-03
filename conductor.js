/*
This file is the orchestral conductor for the animation, coordinating what plays when.

For each <section> (with class="step") in the index.html file, this file contains:
   (1) an "activate" function, which is called when the scrolled position switches sections, and
   (2) an "update" function, which is called when the scrolled position changes within a section

Note that the "update" functions are functions of "progress", which is the relative position
within the section
*/

var activateFunctions = []
var updateFunctions = []
var reverseFunctions = []


/* Title Section */

for (i=0; i<document.getElementById('sections').childElementCount; i++) {
  activateFunctions.push( function() {})
  updateFunctions.push( function() {})
  reverseFunctions.push( function() {})
}

activateFunctions[0] = function(){ 
  graphic.style.opacity = 0;
}

activateFunctions[1] = function(){ 
  $('#graphic').fadeTo('slow', 1);
  $('#intro').fadeTo('slow', 0);
};

activateFunctions[2] = function(){ 
  $('body').animate({backgroundColor:'#add8e6'}, 300);
  $('.step').animate({color:'#000000'}, 300);
};

reverseFunctions[0] = function(){ 
  $('#intro').fadeTo('slow', 1);
  $('#graphic').fadeTo('slow', 0);
};

reverseFunctions[1] = function(){ 
  $('body').animate({backgroundColor:'#000000'}, 300);
  $('.step').animate({color:'#fdc56d'}, 300);
};

// Make it happen!
scrollerDisplay(d3.select('#graphic'), 'step', activateFunctions, updateFunctions)