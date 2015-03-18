'use strict';

var app = angular.module('portfolio', []);

app.controller('PortfolioController', ['$scope', '$sce', function($scope, $sce) {
  $scope.items = [
	  {
	  	name: "University of Alberta",
	  	type:"Responsive Website",
	  	url:"http://www.ualberta.ca/",
	  	image:"assets/img/ualberta.jpg",
	  	description:$sce.trustAsHtml("Wireframed, mocked up, and implemented the responsive layout and components for the University of Alberta website. Also developed a <a href='http://ualberta.github.io/institutional-framework/docs/styleguide/' target='_blank'>style guide</a> for future designers and content producers to adhere to."),
	  	tags: ["bootstrap", "jQuery", "LESS", "Grunt"]
	  },
	  {
	  	name: "Onlea",
	  	type:"Responsive Website",
	  	url:"http://www.onlea.org",
	  	image:"assets/img/onlea.jpg",
	  	description:$sce.trustAsHtml("Implemented the provided designs for the Onlea website."),
	  	tags: ["gulp", "LESS", "jQuery", "SVG" ]
	  },
	  {
	  	name: "Bermudafest",
	  	type:"Responsive Website",
	  	url:"http://www.bermudafest.com/",
	  	image:"assets/img/bermudafest.jpg",
	  	description:$sce.trustAsHtml("Created and implemented the design for 2014 Bermudafest.  Featuring an online bidding service and interactive schedule."),
	  	tags: [ "LESS", "PHP", "Twilio", "jQuery" ]
	  },
	  {
	  	name: "Scott Belford",
	  	type:"Responsive Website",
	  	url:"http://www.scottbelford.ca/",
	  	image:"assets/img/scottbelford.jpg",
	  	description:$sce.trustAsHtml("Created and implemented the design for comedian Scott Belford's website."),
	  	tags: ["Responsive", 'LESS']
	  },
	  {
	  	name: "Worst Days Down",
	  	type:"Responsive Website",
	  	url:"http://www.worstdaysdown.com/",
	  	image:"assets/img/worst-days.jpg",
	  	description:$sce.trustAsHtml("Volunteer project that consisted of wireframing and implementing a one page site for Worst Days Down, an Edmonton punk rock band."),
	  	tags: [ "Parallax", "LESS" ]
	  },
	  {
	  	name: "Tyrannosaurus Puzzle",
	  	type:"Interactive Puzzle",
	  	url:"https://d396qusza40orc.cloudfront.net/dino101%2Fpuzzle%2Ftyrannosaurus-puzzlebox.html",
	  	image:"assets/img/puzzle.jpg",
	  	description:$sce.trustAsHtml("A puzzle where the user must assemble the bones of a dinosaur, created for the Dino 101 online course offered through Coursera."),
	  	tags: [ "CreateJS", "jQuery", "LESS", "javascript"]
	  },
	  {
	  	name: "World War I Timeline",
	  	type:"Interactive Timeline",
	  	url:"http://www.laneolson.ca/world-war-i/",
	  	image:"assets/img/wwi-timeline.jpg",
	  	description:$sce.trustAsHtml("A contest entry for a visualizing World War I data for the 100th Anniversary of World War I."),
	  	tags: []
	  },
	  {
	  	name: "Video Game Timeline",
	  	type:"Interactive Timeline",
	  	url:"https://d396qusza40orc.cloudfront.net/uvg/timeline/cz10.html",
	  	image:"assets/img/uvg-timeline.jpg",
	  	description:$sce.trustAsHtml("A timeline containing all of the video games featured in the Understanding Video Games course offered through Coursera."),
	  	tags: [ "ChronoZoom", "Javascript", "LESS", "jQuery" ]
	  },
	  {
	  	name: "Geologic Time Scale",
	  	type:"Interactive Timeline",
	  	url:"https://d396qusza40orc.cloudfront.net/dino101%2Ftimescale%2Ftimescale.html",
	  	image:"assets/img/timescale.jpg",
	  	description:$sce.trustAsHtml("This time scale will take you back through the history of the earth allowing you to visit time periods and events."),
	  	tags: [ "ChronoZoom", "Javascript", "LESS", "jQuery" ]
	  }
  ];
  $scope.flipCard = function(item) {
  	if(item.className === "hover")
  		item.className = "";
  	else 
  		item.className = "hover";
  };
}]);