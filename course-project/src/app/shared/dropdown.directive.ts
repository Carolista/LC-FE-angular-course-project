import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]' // customize to prevent interference with built-in names
})
export class DropdownDirective {

    @HostBinding('class.open') isOpen: boolean = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}


// Code below allows for dropdown to be closed by clicking anywhere on the document

// import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 
// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {
//   @HostBinding('class.open') isOpen = false;
//   @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
//     this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
//   }
//   constructor(private elRef: ElementRef) {}
// }