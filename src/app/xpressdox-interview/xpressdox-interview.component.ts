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
