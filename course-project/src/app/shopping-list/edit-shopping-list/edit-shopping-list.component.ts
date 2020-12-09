import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css']
})
export class EditShoppingListComponent implements OnInit {

    @ViewChild('nameInput', {static:false}) nameInputRef: ElementRef;
    @ViewChild('amountInput', {static:false}) amountInputRef: ElementRef;

    @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();

    constructor() { }

    ngOnInit(): void {
    }

    onAddItem() {
        const ingredName = this.nameInputRef.nativeElement.value;
        const ingredAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(ingredName, ingredAmount);
        this.ingredientAdded.emit(newIngredient);
    }

}
