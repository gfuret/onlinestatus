var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){
		var employees = JSON.parse(xhr.responseText);
		var statusHTML = '<ul class="bulleted">';
		for (var i = 0; i < employees.length; i += 1) {
			statusHTML += 
			(employees[i].inoffice ? '<li><span class="glyphicon glyphicon-ok in"></span>' : 
			'<li><span class="glyphicon glyphicon-remove out"></span>') + employees[i].name + '</li>';
		};
		document.getElementById('employee-list').innerHTML = statusHTML;
		//console.log(statusHTML);
	}
};
xhr.open('GET', 'data/employees.json');
xhr.send();

console.log('things are happening');  