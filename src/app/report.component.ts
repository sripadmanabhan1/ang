import { Component, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';

@Component({
    selector:'report',
    template:'<h2>{{ getTitle() }}</h2>'
})
export class ReportComponent{
    title="List of Reports";
    
    getTitle(){
        return this.title;
    }
}