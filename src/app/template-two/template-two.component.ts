import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var IntegrationManager:any;

@Component({
  selector: 'app-template-two',
  templateUrl: './template-two.component.html',
  styleUrls: ['./template-two.component.css']
})
export class TemplateTwoComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    IntegrationManager.LoadXDFiles();
  }
}
