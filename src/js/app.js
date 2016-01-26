'use strict';

var app = angular.module('portfolio', []);

app.controller('PortfolioController', ['$scope', '$sce', function($scope, $sce) {
  $scope.items = [
    {
	  	name: "World Map Identification",
	  	type:"Interactive Learning Module",
	  	url:"",
	  	image:"assets/img/world-mapping.jpg",
	  	description:$sce.trustAsHtml("Currently building a 3D interactive world with overlays for events with associated time and location data.  Also includes an identification feature that allows users to drag and drop items in different world regions."),
	  	tags: ["AngularJS", "Jade", "LESS", "Cesium", "gulp", "Javascript", "UX"]
	  },
    {
	  	name: "Phylogenetic Tree",
	  	type:"Interactive Data Visualization",
	  	url:"http://interactive-learning-objects.onlea.org/phylogenetic-tree/#/",
	  	image:"assets/img/phylogenetic-tree.jpg",
	  	description:$sce.trustAsHtml("Created an infinitely zoomable tree using D3 for visualizing phylogentic tree data.  The user can zoom to different areas of the tree and unlock species nodes that contain cards with images and information about the species."),
	  	tags: ["AngularJS", "Jade", "LESS", "d3", "gulp", "SVG", "Javascript", "UX"]
	  },
    {
	  	name: "Drag and Drop Exercises",
	  	type:"Interactive Learning Module",
	  	url:"http://interactive-learning-objects.onlea.org/drag-and-drop/#/sorter/mosasaur",
	  	image:"assets/img/drag-drop.jpg",
	  	description:$sce.trustAsHtml("Built layouts in LESS, and assisted in creating AngularJS modules for a series of drag and drop exercises."),
	  	tags: ["AngularJS", "Jade", "LESS", "d3", "gulp", "Javascript"]
	  },
    {
	  	name: "Dino 101",
	  	type:"Android / iOS App",
	  	url:"http://www.onlea.org/dino-101/",
	  	image:"assets/img/dino-app.jpg",
	  	description:$sce.trustAsHtml("Designed and built an app framework using AngularJS and Cordova to deliver videos and learning objects for massively open online courses."),
	  	tags: ["AngularJS", "Jade", "LESS", "cordova", "gulp", "Javascript", "UX"]
	  },
	  {
	  	name: "University of Alberta",
	  	type:"Responsive Website",
	  	url:"http://www.ualberta.ca/",
	  	image:"assets/img/ualberta.jpg",
	  	description:$sce.trustAsHtml("Wireframed, mocked up, and implemented the responsive layout and components for the University of Alberta website. Also developed a <a href='http://ualberta.github.io/institutional-framework/docs/styleguide/' target='_blank'>style guide</a> for future designers and content producers to adhere to."),
	  	tags: ["Bootstrap", "jQuery", "LESS", "Grunt", "HTML", "Javascript"]
	  },
	  {
	  	name: "Onlea",
	  	type:"Responsive Website",
	  	url:"http://www.onlea.org",
	  	image:"assets/img/onlea.jpg",
	  	description:$sce.trustAsHtml("Implemented the provided designs for the Onlea website."),
	  	tags: ["gulp", "LESS", "jQuery", "SVG", "HTML", "Javascript" ]
	  },
	  {
	  	name: "Bermudafest",
	  	type:"Responsive Website",
	  	url:"http://bermudafest.com/",
	  	image:"assets/img/bermudafest.jpg",
	  	description:$sce.trustAsHtml("Created and implemented the design for 2014 Bermudafest.  Featuring an online bidding service and interactive schedule."),
	  	tags: [ "LESS", "PHP", "Twilio", "jQuery", "HTML", "Javascript" ]
	  },
	  {
	  	name: "Worst Days Down",
	  	type:"Responsive Website",
	  	url:"http://www.worstdaysdown.com/",
	  	image:"assets/img/worst-days.jpg",
	  	description:$sce.trustAsHtml("Volunteer project that consisted of wireframing and implementing a one page site for Worst Days Down, an Edmonton punk rock band."),
	  	tags: [ "LESS", "HTML" ]
	  },
	  {
	  	name: "Dinosaur Puzzles",
	  	type:"Interactive Learning Module",
	  	url:"https://d396qusza40orc.cloudfront.net/dino101%2Fpuzzle%2Ftyrannosaurus-puzzlebox.html",
	  	image:"assets/img/puzzle.jpg",
	  	description:$sce.trustAsHtml("Created a series of puzzles and developed a puzzle application that builds a puzzle based on a JSON file.  The puzzle application includes options for pieces, hints, rotation, snap radius, and answers."),
	  	tags: [ "CreateJS", "jQuery", "LESS", "Javascript", "canvas"]
	  },
	  {
	  	name: "Video Game Timeline",
	  	type:"Interactive Timeline",
	  	url:"https://d396qusza40orc.cloudfront.net/uvg/timeline/cz10.html",
	  	image:"assets/img/uvg-timeline.jpg",
	  	description:$sce.trustAsHtml("A timeline containing all of the video games featured in the Understanding Video Games course offered through Coursera."),
	  	tags: [ "Javascript", "LESS", "jQuery", "canvas" ]
	  },
	  {
	  	name: "Geologic Time Scale",
	  	type:"Interactive Timeline",
	  	url:"https://d396qusza40orc.cloudfront.net/dino101%2Ftimescale%2Ftimescale.html",
	  	image:"assets/img/timescale.jpg",
	  	description:$sce.trustAsHtml("This time scale will take you back through the history of the earth allowing you to visit time periods and events."),
	  	tags: [ "Javascript", "LESS", "jQuery", "canvas" ]
	  }
  ];

  function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
  }

  var allTags = []
  for(var i = 0; i < $scope.items.length; i++) {
    allTags = allTags.concat($scope.items[i].tags);
  }
  $scope.tags = allTags.filter(onlyUnique);

  $scope.flipCard = function(item) {
  	if(item.className === "hover")
  		item.className = "";
  	else
  		item.className = "hover";
  };
}]);
