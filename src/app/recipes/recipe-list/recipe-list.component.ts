import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'pma-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  recipe = new Recipe('Test', 'Opis teztowy', 'http://www.mannequins-online.com/mannequins-de-vitrine/Image/produit/mannequin-homme-plastique-smh-1--studio-ims.smh-1-tete-ims.ehm-1.jpg');

  constructor() { }

  ngOnInit() {
  }

}
