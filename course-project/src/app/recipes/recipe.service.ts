import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFfO-_d-sS_TTAqz0ROkbtJluuq89gwCv_g&usqp=CAU'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFfO-_d-sS_TTAqz0ROkbtJluuq89gwCv_g&usqp=CAU')
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice(); // get a copy of this array
    }
}