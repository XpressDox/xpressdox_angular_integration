import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as vkbeautify from 'vkbeautify';

declare var IntegrationManager:any;
declare var xdInterview:any;

window.xdox_OnCustomClick = function() {
	console.log("Custom Button has been clicked");
}

window.xdox_OnAssembleClick = function() {
	console.log("Assemble Button has been clicked");		
}

@Component({
  selector: 'app-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.css']
})
export class TemplateOneComponent implements AfterViewInit {
  
  constructor() { }

  currentData = "The data will be here";

  ngAfterViewInit() {
    IntegrationManager.LoadXDFiles();
  }

  refreshData(){
  	this.currentData = vkbeautify.xml(xdInterview.getInterviewData());
  	console.log(this.currentData);
  }
}
