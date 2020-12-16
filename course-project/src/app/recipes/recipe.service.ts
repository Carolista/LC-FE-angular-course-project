import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFfO-_d-sS_TTAqz0ROkbtJluuq89gwCv_g&usqp=CAU',[new Ingredient('Sugar', 1), new Ingredient('Salt', 1)]),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFfO-_d-sS_TTAqz0ROkbtJluuq89gwCv_g&usqp=CAU',[new Ingredient('Eggs', 2), new Ingredient('Bread', 1)])
    ];

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice(); // get a copy of this array
    }

    addIngredients(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}