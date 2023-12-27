



$(document).ready(function(){

// start student counter section

	var getcountervalues = document.querySelectorAll('.countervalue');
	// console.log(getcountervalues); 

	getcountervalues.forEach(function(getcountervalue){
		getcountervalue.textContent = 0;
		// console.log(getcountervalue); //

		const updatecounter = function(){
			const getcttarget = +getcountervalue.getAttribute('data-target');

			// console.warn(getcttarget); // 95000  20000  600 350000
			// console.log(typeof getcttarget); //will number cause already chnage number from string

				// getcttarget
			const getctcontent = +getcountervalue.innerText;
			console.error(getctcontent); //0 0 0 0
			// console.log(typeof getctcontent);

			  // 95000  20000  600 350000 / 200
			const incnumber = getcttarget/200;
			// console.log(incnumber);
		   //475 100 3 1750... < 95000  20000  600 350000
			// if(getctcontent < getcttarget){

												//0 0 0 0   + 95000  20000  600 350000 / 200 (475 100 3 1750)
												//475 100 3 1750   + 95000  20000  600 350000 / 200 (475 100 3 1750)
				// getcountervalue.textContent = getctcontent+incnumber;
				// setTimeout(updatecounter,5000);
			// }
		}
		updatecounter();


	}) ;

// end student counter section

//start gradurate section
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanmar',     7],
          ['Indonesia',      3],
          ['Korea',  4],
          ['Thailand', 3],
          ['Sirilanka',    8]
        ]);

        var options = {
          title: 'International Students',
          width:450,
          height:350
           // ,is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

//end gradurate section
// start footer section
		const getyear =document.getElementById('getyear');
		const getfullyear = new Date().getFullYear();
		// console.log(getfullyear);
		getyear.textContent = getfullyear
	// end footer section

	// start login and sticknote
		// start login
			$('#openform').click(function(){
				document.getElementById('myform').style.display="block";
			});

			$('#closeform').click(function(){
				document.getElementById('myform').style.display="none";
			});
		// end login

// end login and sticknote
});
// 13FN