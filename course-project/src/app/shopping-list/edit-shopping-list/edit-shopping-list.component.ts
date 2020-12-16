import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css']
})
export class EditShoppingListComponent implements OnInit {

    @ViewChild('nameInput', {static:false}) nameInputRef: ElementRef;
    @ViewChild('amountInput', {static:false}) amountInputRef: ElementRef;

    constructor(private slService: ShoppingListService) { }

    ngOnInit(): void {
    }

    onAddItem() {
        const ingredName = this.nameInputRef.nativeElement.value;
        const ingredAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(ingredName, ingredAmount);
        this.slService.addIngredient(newIngredient);
    }

}
