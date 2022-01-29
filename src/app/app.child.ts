import { Component, Input } from '@angular/core';

@Component({
  selector: 'child',
  template: `
    
  `
})
export class ChildComponent {
    // streetAddress: string;
    
    @Input()
    // city: string;

    @Input()  // Reference to parent function. Ref provided by parent.
    // callParent: Function;

    submitInput() {
        // this.callParent(this.streetAddress, this.city);
    }
}