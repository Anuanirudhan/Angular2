import { Component } from 'angular2/core';
import { EventListComponent } from './events/event-list.component';
@Component({
	selector: 'events-app',
    template: '<div><h1>hiii {{pageTitle}} </h1> <el-events></el-events></div>',
    directive: [EventListComponent]
})
export class AppComponent {
    pageTitle: string = 'Welcome';
}
