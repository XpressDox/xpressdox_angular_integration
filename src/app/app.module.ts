import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateOneComponent } from './template-one/template-one.component';
import { TemplateTwoComponent } from './template-two/template-two.component';
import { TreeComponent } from './tree/tree.component';
import { XpressdoxInterviewComponent } from './xpressdox-interview/xpressdox-interview.component';
import { XpressdoxInterviewDirective } from './xpressdox-interview/xpressdox-interview.directive';

import {
  MatCardModule,
  MatButtonModule,
  MatTreeModule,
  MatIconModule,
} from '@angular/material';

const appRoutes: Routes = [
  { path: 'template_one', component: TemplateOneComponent },
  { path: 'template_two', component: TemplateTwoComponent },
  { path: 'tree', component: TreeComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    TemplateOneComponent,
    TemplateTwoComponent,
    TreeComponent,
    XpressdoxInterviewComponent,
    XpressdoxInterviewDirective
  ],
  entryComponents: [XpressdoxInterviewComponent],
  imports: [
  	RouterModule.forRoot(
    	appRoutes,
    	{ enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
  MatCardModule,
  MatButtonModule,
  MatTreeModule,
  MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
