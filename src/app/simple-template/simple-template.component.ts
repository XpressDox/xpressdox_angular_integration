import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var M:any;
declare var IntegrationManager:any;
declare var xdInterview:any;

@Component({
	selector: 'app-simple-template',
	templateUrl: './simple-template.component.html',
	styleUrls: ['./simple-template.component.css']
})
export class SimpleTemplateComponent implements OnInit, AfterViewInit {

	codeblock1: string;
	codeblock2: string;

	constructor() { 
		this.codeblock1 = 
		`
		import { Component, Input, AfterViewInit } from '@angular/core';

		declare var IntegrationManager:any;
		declare var xdInterview:any;

		@Component({
			selector: 'app-xpressdox-interview',
			templateUrl: './xpressdox-interview.component.html',
			styleUrls: ['./xpressdox-interview.component.css']
		})

		export class XpressdoxInterviewComponent implements AfterViewInit {
			@Input() _templateIdentifier: string;

			interviewData;

			constructor() {}

			ngAfterViewInit() {
				IntegrationManager.LoadXDFiles();
			}

			refreshData(){
				xdInterview.getInterviewData();
			}
		}
		`;
		this.codeblock2 =
		`
		<!-- This value identifies the template - the template can be moved or renamed without affecting this identifier -->
		<input id="xdTemplateIdentifier" name="xdTemplateIdentifier" value="{{_templateIdentifier}}" type="hidden">
		<!-- This value is only applicable when using the RESTful API - see last tab above -->
		<input id="xdUsageIdentifier" name="xdUsageIdentifier" value="" type="hidden">
		<!-- This value identifies the user profile -->
		<input id="xdUserIdentifier" name="xdUserIdentifier" value="86134d02-d2a6-4b8f-ac0c-883dbfb9e506" type="hidden">

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
		`;
	}

	ngOnInit() {
		var el = document.querySelector('.tabs');
		var instance = M.Tabs.init(el,{
			onShow: function(tab) {
				M.AutoInit();
			}
		});
	}

	ngAfterViewInit() {
		IntegrationManager.LoadXDFiles();
	}
}
