import { Component, OnInit } from '@angular/core';

declare var M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

	codeblock1: string;
	codeblock2: string;
  codeblock3: string;
  codeblock4: string;

  constructor() { 

  	this.codeblock1 = 
  	`
<script type="text/javascript" src="https://server.xpressdox.com/Cloud/Integration/LoadScript.ashx?id=jquery"></script>		
  	`;

    this.codeblock2 = 
    `
<script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.4.1.js"></script>
    `;

    this.codeblock3 = 
    `
<!-- If you are already using the jQuery JavaScript Library in your page, do not include this line (See note above) -->
<script type="text/javascript" src="https://server.xpressdox.com/Cloud/Integration/LoadScript.ashx?id=staticXpressdoxLoader"></script>
    `;

    this.codeblock4 =
    `
<!-- This value identifies the template - the template can be moved or renamed without affecting this identifier -->
<input id="xdTemplateIdentifier" name="xdTemplateIdentifier" value="762b09d8-a3df-42d9-b52e-f837a4dd2402" type="hidden">
<!-- This value is only applicable when using the RESTful API - see last tab above -->
<input id="xdUsageIdentifier" name="xdUsageIdentifier" value="" type="hidden">
<!-- This value identifies the user profile -->
<input id="xdUserIdentifier" name="xdUserIdentifier" value="e077a850-485d-4e3c-b78e-4e7f9c43faf8" type="hidden">

<!-- This value can be set to empty if you choose to use the default XpressDox results page -->
<input id="xdReturnURL" name="xdReturnURL" value="" type="hidden">

<!-- You can pre-populated the interview with data by setting this value.  Initial data must be in XML format consistent with that found in XpressDox data files -->
<!-- Important - the xml data must be encoded to Base64 format for the post to be successful -->
<input id="xdInitialData" name="xdInitialData" value="" type="hidden">
          
<!-- The interview will be loaded into this container -->
<div id="divInterviewContainer">
  <!-- This HTML will display a loading gif while the interview and code are loading from the XpressDox cloud -->
  <div id="divInterviewLoading" style="height: 500px;">
    <div style="margin: 100px auto 0px auto; height: 64px; width: 64px; background: url('https://server.xpressdox.com/Cloud/ComponentStyling/LoaderMask/Images/Loader.gif') no-repeat;"></div>
    <div style="margin: 15px auto; height: 20px; text-align: center; font-weight: bold;">Loading...</div>
  </div>
</div>

<!-- Possible values for ThemeName are: Default, Albatross, Cardinal, ElectricOrange, FiscalShrike, Lourie, LumoGreen, PowderBlue, PurpleTurtle,RoseRed, SlateBlue, Turaco, Wagtail -->
<input id="xdthemeName" name="xdthemeName" value="Default" type="hidden">

<!-- Possible values for InterviewSize are: Small, Medium, Large and xLarge -->
<input id="xdInterviewSize" name="xdInterviewSize" value="Medium" type="hidden">
    `
  }

  ngOnInit() {
    var el = document.querySelector('.tabs');
    var instance = window.M.Tabs.init(el, {});
  }

}
