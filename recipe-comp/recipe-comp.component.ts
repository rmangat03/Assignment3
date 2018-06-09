import { Component, OnInit } from '@angular/core';
import {Recipe} from "../Recipe.class";
import {Item} from "../Item.class"
@Component({
  selector: 'recipe-comp',
  templateUrl: './recipe-comp.component.html',
  styleUrls: ['./recipe-comp.component.css']
})
export class RecipeCompComponent implements OnInit {
  userRecipeObj: Recipe[] = [];
  selectedRecipe = null
  selectedIng = null;
  selectedQn = null;
  selectedInstruction: string = null;
  userRecipeNameInput: string = "";
  addOrDeleteIng: string = "";
  quantityIng: number = 0;
  userSelectedIng: string;
  inst: string = "";
  letter = /^[a-zA-Z]+( [a-zA-Z]+)*$/;

  constructor() { }

  ngOnInit() {
    // let recipe1 =new Recipe();
    // recipe1.setName("mango pie");
    // recipe1.addItem(new Item("mango",9));
    // recipe1.addInstruction("Peel it. shake and mix it and enjoy");
    // this.userRecipeObj.push(recipe1);
  }

  addRecipe(){
    for(let recipe of this.userRecipeObj){
    if(recipe.NAME == this.userRecipeNameInput && this.addOrDeleteIng.match(this.letter) != null && this.quantityIng > 0 && this.userRecipeNameInput.match(this.letter) !== null){

      this.selectedQn = null;
      this.selectedIng = null;

      recipe.addItem(new Item(this.addOrDeleteIng, this.quantityIng));

      return;
  }
  }
  if((this.addOrDeleteIng.match(this.letter) != null && this.quantityIng > 0) || this.userRecipeObj.length == 0){
    this.selectedQn = null;
    this.selectedIng = null;
    this.selectedRecipe = null;
    this.selectedInstruction = null;



    let recipeO = new Recipe();
    recipeO.setName(this.userRecipeNameInput);
    recipeO.addItem(new Item(this.addOrDeleteIng, this.quantityIng));
    recipeO.addInstruction(this.inst);
    this.userRecipeObj.push(recipeO);

  }

  }

  deleteRecipe(){
    if(this.selectedRecipe !== null){
    for(let recipe of this.userRecipeObj){
      if(recipe.NAME === this.selectedRecipe){
        this.userRecipeObj.splice(this.userRecipeObj.indexOf(recipe),1);
      }
    }
    }
  }


  selectRecipe(selected){
    this.selectedRecipe = selected;
  }

  selectIng(recipe){
    this.selectedIng = recipe.name;
  }

  selectQuantity(recipe){
    this.selectedQn = recipe.quantity;
  }

  selectInstruction(inst){
    this.selectedInstruction = inst;
  }


  editRecipe(){

    for(let recipe of this.userRecipeObj){
      if(recipe.NAME === this.selectedRecipe && this.userRecipeNameInput.match(this.letter) !== null){
        for(let recipeCheck of this.userRecipeObj){
          if(recipeCheck.NAME === this.userRecipeNameInput){
            alert("Recipe already there");
            return;
          }
      }
      recipe.NAME = this.userRecipeNameInput;

    }
      if(recipe.INSTRUCTIONS[0] === this.selectedInstruction && this.inst != ""){
        recipe.INSTRUCTIONS[0] = this.inst;
      }
      for(let recipeIng of recipe.INGRIDENTS){
        if(recipeIng.name === this.selectedIng && this.addOrDeleteIng.match(this.letter) != null){
          recipeIng.name = this.addOrDeleteIng;
        }
        if(recipeIng.quantity === this.selectedQn && this.quantityIng > 0){
          recipeIng.quantity = this.quantityIng;
        }
    }

  }
    this.selectedQn = null;
    this.selectedIng = null;
    this.selectedRecipe = null;
    this.selectedInstruction = null;


}
}
