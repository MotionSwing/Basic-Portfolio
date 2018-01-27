// Connect with Me aside
function load_connect_icons() {
	var social = [
		{
			index: 1,
			siteName: "GitHub",
			siteURL: "https://github.com/MotionSwing",
			imgURL: "assets/images/github-128.png",
			tooltip: "Fork me on GitHub"
		},
		{
			index: 2,
			siteName: "Linkedin",
			siteURL: "https://www.linkedin.com/in/jonathan-white-ba4a2761/",
			imgURL: "assets/images/linkedin-128.png",
			tooltip: "Connect with me on Linkedi"
		},
		{
			index: 3,
			siteName: "StackOverflow",
			siteURL: "https://stackoverflow.com/users/2203530/jon-white?tab=profile",
			imgURL: "assets/images/stackoverflow-128.png",
			tooltip: "Answer my questions on StackOverflow"
		}
	]


	var connect = '<h3>Connect with Me</h3>';
	connect += '<ul class="clearfix">';

	for (i=0; i < social.length; i++) {
		connect += '<li class="icon-'+ social[i].index +'">';
		connect += '<a href="'+ social[i].siteURL +'" title="'+ social[i].tooltip +'" target="_blank">';
		connect += '<img class="icon" src="'+ social[i].imgURL +'" alt="'+ social[i].siteName +'">';
		connect += '</a>';
		connect += '</li>';
	}

	connect += '</ul>';

	document.getElementById('connect-with-me').innerHTML = connect;

};


// Site Header
function load_header() {
	var header = '<div class="main-header">';
	header += '<h1 class="name-tag">Jon White</h1>';
	header += '<ul>';
	header += '<li class="menuitem-1"><a class="page-link" href="index.html">About</a></li>';
	header += '<li class="menuitem-2"><a class="page-link" href="portfolio.html">Portfolio</a></li>';
	header += '<li class="menuitem-3"><a class="page-link" href="contact.html">Contact</a></li>';
	header += '</ul>';
	header += '</div>';
	document.getElementById('header').innerHTML = header;
};


// Site Footer
function load_footer() {
	document.getElementById('footer').innerHTML = '<p>&copy; Copyright 2018 Jon White</p>'
};

// Update mailto with form details
function updateMailTo() {
	var sName = document.getElementById('submitter-name').value;
	var sEmail = document.getElementById('submitter-email').value;
	var sMessage = document.getElementById('submitter-message').value;

	var eMessage = "mailto:jon.white2@gmail.com?Subject=I%20have%20a%20question%20for%20you%20Jon%20White&body=";
	eMessage += "Name%3A%20" + sName.replace(/\s/g, "%20") + "%0D";
	eMessage += "Email%3A%20" + sEmail.replace(/\./g, "%2E").replace(/\@/g, "%40") + "%0D";
	eMessage += "Message%3A%20";
	eMessage += sMessage.replace(/\s/g, "%20");

	console.log(eMessage);
	document.getElementById('send-btn').href = eMessage;
}

// Style Form Labels after hovering over their corresponding input
function updateLabelClass(e,c){
	var label = document.getElementById(e).previousSibling.previousSibling;
	label.className = c;
}