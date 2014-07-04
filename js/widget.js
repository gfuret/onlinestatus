var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){
		var employees = JSON.parse(xhr.responseText);
		var statusHTML = '<p>Employee status list</p><ul class="bulleted">';
		for (var i = 0; i < employees.length; i += 1) {
			statusHTML += 
			(employees[i].inoffice ? '<li><span class="glyphicon glyphicon-ok in"></span>' : 
			'<li><span class="glyphicon glyphicon-remove out"></span>') + employees[i].name + '</li>';
		};
		document.getElementById('employee-list').innerHTML = statusHTML;
	}
};
xhr.open('GET', 'data/employees.json');
xhr.send();



var rooms = new XMLHttpRequest();
rooms.onreadystatechange = function(){
	if(rooms.readyState === 4){
		var room = JSON.parse(rooms.responseText);
		var statusHTML = '<p>Room status list</p><ul class="bulleted">';
		for (var i = 0; i < room.length; i += 1) {
			statusHTML += 
			(room[i].inoffice ? '<li><span class="glyphicon glyphicon-ok in"></span>' : 
			'<li><span class="glyphicon glyphicon-remove out"></span>') + room[i].name + ' ' + '</li>';
		};
		document.getElementById('room-list').innerHTML = statusHTML;
	}
};
rooms.open('GET', 'data/rooms.json');
rooms.send();

