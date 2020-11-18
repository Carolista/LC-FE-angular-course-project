import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpxhere.com%2Fen%2Fphoto%2F1557385&psig=AOvVaw1Ebicm-M_leRtlFCndQM29&ust=1605820560521000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCip_mBje0CFQAAAAAdAAAAABAD')
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
