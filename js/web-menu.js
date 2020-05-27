var webMenuList = document.getElementById("webMenuList");
var webMenuSearchBox = document.getElementById("webMenuSearchBox");

// Data
var webSites = [
{ site: 'Reddit', icon: 'reddit', url: 'https://redit.com'},
{ site: 'Github', icon: 'github', url: 'https://github.com'},
{ site: 'Facebook', icon: 'facebook', url: 'https://facebook.com'},
{ site: 'Gmail', icon: 'gmail', url: 'https://mail.google.com'},
{ site: 'Youtube', icon: 'youtube', url: 'https://youtube.com'},
{ site: 'GDrive', icon: 'gdrive', url: 'https://drive.google.com'},
{ site: 'Twitter', icon: 'twitter', url: 'https://twitter.com'},
{ site: 'Instagram', icon: 'instagram', url: 'https://instagram.com'}
];

// Generate a list
for (i = 0; i < (webSites.length); i++) {

	var site = webSites[i].site;
	var icon = webSites[i].icon;
	var url = webSites[i].url;

	var li = document.createElement('li');

	// Add mouseup event
	li.onmouseup = function() {
		window.location.href = encodeURI(url);
	}
		
	// Create an outer div, child of li
	var webItem = document.createElement('div')
	webItem.className = 'webItem';

	// Create a second div, webItemContainer
	var webItemContainer = document.createElement('div');
	webItemContainer.className = 'webItemContainer';

	// Create the innermost div, contains icon and label
	var webItemBody = document.createElement('div');
	webItemBody.className = 'webItemBody';

	// Create div for webItemIcon
	var webItemIcon = document.createElement('div');
	webItemIcon.className = 'webItemIcon';
	webItemIcon.style.background = "url('assets/webcons/" + icon + ".svg')";
	webItemIcon.style.backgroundSize = 'cover';

	// Create webItemName
	var webItemName = document.createElement('div');
	webItemName.className = 'webItemName';
	webItemName.innerHTML = site;

	// Append divs with heirarchy
	webItem.appendChild(webItemContainer);
	webItemContainer.appendChild(webItemBody);

	webItemBody.appendChild(webItemIcon);
	webItemBody.appendChild(webItemName);

	li.appendChild(webItem);
	webMenuList.appendChild(li);
}


// Search through the list
webMenuSearchBox.onkeyup = function() {
	// Declare variables
	var input, filter, ul, li, a, i, txtValue;
	input = webMenuSearchBox;
	filter = input.value.toUpperCase();
	ul = webMenuList;
	li = ul.getElementsByTagName('li');

	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByClassName("webItem")[0];
		txtValue = a.innerHTML || a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			// Selected tile
			li[i].style.display = "";
		} else {
			// Hidden tile
			li[i].style.display = "none";
		}
	}
}