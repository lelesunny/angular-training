import { Component } from '@angular/core';

@Component({
  selector: 'abc-page',
  template: `
    <h4>Random Salary Samples ({{newProp}})</h4>
    <salary-card></salary-card>
    <salary-card></salary-card>
    <salary-card></salary-card>
  `
})
export class CardSetComponent {
    newProp = 12;
 }
