/*$("#main").append("Filip Mišík");
var awsomeThoughts = "I am Filip and I am AWESOME!";
console.log(awsomeThoughts);
var formatedName = HTMLheaderName.replace("%data%", "Filip Misik");
var formatedRole = HTMLheaderRole.replace("%data%","Web Developer");

$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);

var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    s = s.toLocaleUpperCase().substring(1,2);
    s = s.toLocaleUpperCase(1);
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));*/

var bio = {
	"name" : "Filip Misik",
	"role" : "Web Developer",
	"welcomeMessage" : "Welcome good people of Terra.",
	"contacts" : {
		"mobile" : "00-123-456-789",
		"email" : "test@email.com",
		"github" : "caranuial",
		"location" : "Smizany, Slovakia",
		"twitter" : "#dontHaveTwitter"
	},
	"skills" : [
		"PHP", "HTML", "JavaScript"
	],
	"bioPic" : "images/tardisLogo.png"
};

bio.display = function() {

	var formatedName = HTMLheaderName.replace("%data%", bio.name);
	var formatedRole = HTMLheaderRole.replace("%data%",bio.role);

	$("#header").prepend(formatedRole);
	$("#header").prepend(formatedName);
	
	
	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	
	$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	
		/*$("#header").append(HTMLskillsStart);
		var formatedSkills = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formatedSkills);
		formatedSkills = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formatedSkills);
		formatedSkills = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formatedSkills);*/
		
	if(bio.skills.length > 0) {
		
		$("#header").append(HTMLskillsStart);
		
		for (skill in bio.skills){
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
		}
	
	};
	
}

bio.display();

var work = {
	"jobs" : [{
		"employer" :  "TT",
		"title" : "Metrics Analyst",
		"location" : "Bratislava",
		"dates"  : "2002 - 2012",
		"description" : "Numbers numbers numbers"
	},
	{
		"employer" :  "World",
		"title" : "King",
		"location" : "London",
		"dates"  : "2012 - ongoing",
		"description" : "King of world."
	}]
};

/*work["position"] =  "Metrics Folk";
work["employer"] =  "ATT";
work["years"] =  3;
work["city"] =  "Bratislava";

var education = {};
education.name = "Economic university in Bratislava";
education.years = 5;
education.city = "Bratislava";*/

var educations = {
	"schools": [
		{
			"name":"Economic University in Bratislava",
			"location":"Bratislava, Slovakia",
			"degree":"BA",
			"major": ["Computer Science", "Economics informatic" ],
			"dates": "2007-2010",
			"url" : "http://euba.sk"
		},
		{
			"name":"Economic University in Bratislava",
			"location":"Bratislava, Slovakia",
			"degree":"Master",
			"major": ["Computer Science"],
			"dates": "2010-2012",
			"url" : "http://euba.sk"
		}
	],
	"onlineCourses":[
		{
			"title":"Responsive Web Design Fundamentals",
			"school":"Udacity",
			"dates" : "2014",
			"url":"https://www.udacity.com/course/progress#!/c-ud893-nd"
		},
		{
			"title":"Responsive Images",
			"school":"Udacity",
			"dates" : "2014",
			"url" : "https://www.udacity.com/course/progress#!/c-ud882-nd"
		},
		{
			"title":"Intro to HTML and CSS",
			"school":"Udacity",
			"dates" : "2014",
			"url" : "https://www.udacity.com/course/progress#!/c-ud304-nd"
		},
		{
			"title":"JavaScript Basics",
			"school":"Udacity",
			"dates" : "2014",
			"url": "https://www.udacity.com/course/viewer#!/c-ud804-nd"
		}
	]
}

var projects ={
	"projects" : [
	{
		"title": "Build a Portfolio Site",
		"dates": "2014",
		"description": "You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
		"images": ["images/MainImg.jpg"]
	},
	{
		"title": "Online Resume",
		"dates": "2014",
		"description": "You'll demonstrate your mastery of the language's syntax through a series of challenges. Each multipart problem mimics a real-life challenge that front-end developers face. You'll be required to write clean code and to apply your knowledge of variables, objects, JSON, functions and control flow to successfully solve the challenges.",
		"images": ["images/Resume.jpg"]
	}
	]
}

function displayWork(){
	if(work.jobs.length > 0) {
		
		for ( job in work.jobs){
			
		$("#workExperience").append(HTMLworkStart);
		
		var formatedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formatedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formatedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formatedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formatedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		
		$(".work-entry:last").append(formatedWorkEmployer + formatedWorkTitle + formatedWorkDates + formatedWorkLocation + formatedWorkDescription);
		}
	};
}

displayWork();

$(document).click(function(loc) {
  // your code goes here
  var x= loc.pageX;
  var y= loc.pageY;
  
  logClicks(x,y);
});
/*
$("#main").append(internationalizeButton);

function  inName(name) {  
    name = name.trim().split(" ");
	
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +  name[0].slice(1).toLowerCase();
    
	return name[0] + " " + name[1];
}


function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var arrayOfStrings = finalName.split(" ");
    
    arrayOfStrings[1] = arrayOfStrings[1].toUpperCase();
    arrayOfStrings[0] = arrayOfStrings[0].slice(0,1).toUpperCase() +  arrayOfStrings[0].slice(1).toLowerCase();
    finalName = arrayOfStrings[0] + " " + arrayOfStrings[1];
    
    
    // Don't delete this line!
    return finalName;
};*/

projects.display = function() {
	
	
	if(projects.projects.length > 0) {
		
		for ( project in projects.projects){
			
		$("#projects").append(HTMLprojectStart);
		
		var formatedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formatedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formatedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		
		var formatedProjectImage
		if(projects.projects[project].images.length > 0) {
			formatedProjectImage = ""
			for (image in projects.projects[project].images){
				formatedProjectImage = formatedProjectImage + HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			}
		}
		$(".project-entry:last").append(formatedProjectTitle + formatedProjectDates + formatedProjectDescription + formatedProjectImage);
		}
	}
}

projects.display();

educations.display = function() {
	
	if(educations.schools.length > 0) {
		
		for ( school in educations.schools){
			
			$("#education").append(HTMLschoolStart);
			
			var formatedSchoolName = HTMLschoolName.replace("%data%", educations.schools[school].name).replace("#", educations.schools[school].url);
			var formatedSchoolDegree = HTMLschoolDegree.replace("%data%", educations.schools[school].degree);
			var formatedSchoolDates = HTMLschoolDates.replace("%data%", educations.schools[school].dates);
			var formatedSchoolLocation = HTMLschoolLocation.replace("%data%", educations.schools[school].location);
			
			$(".education-entry:last").append(formatedSchoolName + formatedSchoolDegree + formatedSchoolDates + formatedSchoolLocation);
			
			var formatedSchoolMajor = "";
			for (maj in educations.schools[school].major) {
				if (formatedSchoolMajor != "") {
					console.log( formatedSchoolMajor );
					formatedSchoolMajor =  formatedSchoolMajor + ", " + educations.schools[school].major[maj];
					console.log( formatedSchoolMajor );
				}
				else {
					console.log( formatedSchoolMajor );
					formatedSchoolMajor = educations.schools[school].major[maj];
					console.log( formatedSchoolMajor );
				}
			}
			
			
			formatedSchoolMajor = HTMLschoolMajor.replace("%data%", formatedSchoolMajor);
			$(".education-entry:last").append(formatedSchoolMajor);
			
		}
	}
	
	if(educations.onlineCourses.length > 0) {
		
		$("#education").append(HTMLonlineClasses);
		
		for ( onlineCourse in educations.onlineCourses){
			
			$("#education").append(HTMLschoolStart);
			
			var formatedCourseTitle = HTMLonlineTitle.replace("%data%", educations.onlineCourses[onlineCourse].title).replace("#", educations.onlineCourses[onlineCourse].url);
			var formatedCourseSchool = HTMLonlineSchool.replace("%data%", educations.onlineCourses[onlineCourse].school);
			var formatedCourseDates = HTMLonlineDates.replace("%data%", educations.onlineCourses[onlineCourse].dates);
			// Posible improvment - change in helper.js needed - to display links correctly
			var formatedCourseURL = HTMLonlineURL.replace("%data%", educations.onlineCourses[onlineCourse].url);
		
			$(".education-entry:last").append(formatedCourseTitle + formatedCourseSchool + formatedCourseDates + "<br>" );
		}
	}
}

educations.display();

$("#mapDiv").append(googleMap);

