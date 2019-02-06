<!DOCTYPE html>
<html>
  <head>
    <meta charset = "utf-8" />
    <meta name = "viewport" content = "width = device-width" />

		<meta property = "og:url" content = "https://classroomscreen--damienvesper.repl.co/" />
		<meta property = "og:type" content = "website" />
		<meta property = "og:title" content = "ClassroomScreen" />
		<meta property = "og:description" content = "The best screen for every classroom! Try it and love it." />
 
    <title>ClassroomScreen</title>
		<link href = "style.css" rel = "stylesheet" type = "text/css" />
		<link href = "./VesperEnterprise.PNG" rel = "icon" type = "image/png" sizes = "32x32">
    <script src = "script.js"></script>
  </head>
  <body>
		<br/>
		<main>
			<div class = "inner">
				<div class = "hud-top">
					<div class = "box hud-top-left">
						<input id = "class-name" type = "text" placeholder = "Enter class name..." />
						<input id = "instructor-name" type = "text" placeholder = "Enter instructor's name..." />
					</div>
					<div class = "flex-placeholder"></div>
					<div class = "box hud-top-right">
						<span id = "date">
							<span id = "date-day" class = "nopadding">Day</span><span class = "nopadding">,</span>
							<span id = "date-month" class = "nopadding">Month</span>
							<span id = "date-date" class = "nopadding">Date</span>
						</span>
						<br/>
						<span id = "time">
							<span id = "time-hour" class = "nopadding">00</span>
							<span class = "nopadding">:</span>
							<span id = "time-minute" class = "nopadding">00</span>
							<span class = "nopadding">:</span>
							<span id = "time-second" class = "nopadding">00</span>
							<span id = "time-api" class = "nopadding">AM</span>
						</span>
					</div>
				</div>
				<div class = "hud-center">
					<div class = "box hud-center-left">
						<span id = "agenda-text">Agenda</span>
						<br/>
						<textarea id = "instructions" placeholder = "Enter instructions here..."></textarea>
					</div>
					<div class = "flex-placeholder"></div>
					<div class = "hud-center-right">
						<div class = "box hud-center-top-right">
							<span id = "schedule-text">Bell Schedule</span>
							<table id = "schedule-table">
								<tr>
									<th>Name</th>
									<th>Start</th>
									<th>End</th>
								</tr>
								<tr id = "row-sm-1">
									<td>Intermission</td>
									<td>6:50</td>
									<td>7:04</td>
								</tr>
								<tr id = "row-sm-2">
									<td>Block I</td>
									<td>7:07</td>
									<td>7:37</td>
								</tr>
								<tr id = "row-sm-3">
									<td>Block II</td>
									<td>7:40</td>
									<td>9:10</td>
								</tr>
								<tr id = "row-sm-4">
									<td>Block III</td>
									<td>9:13</td>
									<td>10:43</td>
								</tr>
								<tr id = "row-sm-5">
									<td>Block IV</td>
									<td>10:46</td>
									<td>12:51</td>
								</tr>
								<tr id = "row-sm-6">
									<td>Block V</td>
									<td>12:54</td>
									<td>2:20</td>
								</tr>
							</table>
						</div>
						<div class = "box hud-center-bottom-right">
							<span id = "timer-text">Timer</span>
							<div class = "timer-left">
								<div id = "timer-add-bar">
									<div class = "flex-timer-placeholder"></div>
									<button id = "timer-add-btn-1" class = "timer-change-btn">+</button>
									<button id = "timer-add-btn-2" class = "timer-change-btn">+</button>
									<button id = "timer-add-btn-3" class = "timer-change-btn">+</button>
									<button id = "timer-add-btn-4" class = "timer-change-btn">+</button>
									<div class = "flex-timer-placeholder"></div>
								</div>
								<div id = "timer-numbers">
									<span id = "timer-numbers-min-2" class = "nopadding">0</span>
									<span id = "timer-numbers-min-1" class = "nopadding">0</span>
									<span class = "nopadding">:</span>
									<span id = "timer-numbers-sec-2" class = "nopadding">0</span>
									<span id = "timer-numbers-sec-1" class = "nopadding">0</span>
								</div>
								<div id = "timer-subtract-bar">
									<div class = "flex-timer-placeholder"></div>
									<button id = "timer-subtract-btn-1" class = "timer-change-btn">-</button>
									<button id = "timer-subtract-btn-2" class = "timer-change-btn">-</button>
									<button id = "timer-subtract-btn-3" class = "timer-change-btn">-</button>
									<button id = "timer-subtract-btn-4" class = "timer-change-btn">-</button>
									<div class = "flex-timer-placeholder"></div>
								</div>
							</div><!--
							<div class = "timer-right">
								<button id = "select-timer-btn" class = "btn-timer-select"></button>
								<button id = "select-stopwatch-btn" class = "btn-timer-select"></button>
							</div>!-->
						</div>
					</div>
				</div>
			</div>
		</main>
  </body>
</html>
