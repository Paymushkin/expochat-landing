// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

AOS.init();




(() => {
	var currentText = 0;
	var headerText = ["a web-based follow-up tool for both visitors and exhibitors",
	"a no-app follow-up tool for visitors, enabling organizers to sell lead bundles to exhibitors",
	"an Ai Matchmaking tool and Lead Bundle Sales to exhibitors"];
	var divText = document.getElementById("hero-type");

	document.onload = setTimeout(function(){changeHeaderText();}, 500);

	function changeHeaderText()
	{
		
		if (currentText === headerText.length - 1) currentText = 0;
		else currentText += 1;
		
		deleteHeaderText();

	}

	function deleteHeaderText()
	{
		
		if (divText.innerHTML.length === 0) setTimeout(function(){typeHeaderText();}, 50);
		
		else
		{
			
			// divText.innerHTML = divText.innerHTML.substring(0, divText.innerHTML.length - 1);
			divText.textContent = ""
			
			setTimeout(function(){deleteHeaderText();}, 50);
			
		}
		
	}

	function typeHeaderText()
	{
		
		if (divText.innerHTML.length === headerText[currentText].length) setTimeout(function(){changeHeaderText();}, 2000);
		
		else
		{
			
			divText.innerHTML = headerText[currentText].substring(0, divText.innerHTML.length + 1);
			
			setTimeout(function(){typeHeaderText();}, 50);
			
		}
		
	}
})()