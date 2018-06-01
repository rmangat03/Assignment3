import { Component, OnInit } from '@angular/core';
import {Recipe} from "../Recipe.class";
import {Item} from "../Item.class"
@Component({
  selector: 'recipe-comp',
  templateUrl: './recipe-comp.component.html',
  styleUrls: ['./recipe-comp.component.css']
})
export class RecipeCompComponent implements OnInit {
  userRecipeName: string[] = [];
  userRecipeObj: Recipe[] = [];
  selectedRecipe = null
  selectedIng = null;
  selectedQn = null;
  selectedInstruction: string = null;
  userRecipeNameInput: string = "";
  addOrDeleteIng: string = "";
  quantityIng: number = 0;
  userSelectedIng: string;
  edit: number = 0;
  inst: string = "";
  letter = /^[a-zA-Z]+( [a-zA-Z]+)*$/;

  constructor() { }

  ngOnInit() {
    this.userRecipeName.push("mango pie");
    let recipe1 =new Recipe();
    recipe1.addItem(new Item("mango",9));
    recipe1.addInstruction("Peel it. shake and mix it and enjoy");
    this.userRecipeObj.push(recipe1);
  }

  addRecipe(){
    if(!this.userRecipeName.includes(this.userRecipeNameInput) && this.addOrDeleteIng.match(this.letter) != null && this.quantityIng > 0 && this.userRecipeNameInput.match(this.letter) !== null){
      this.selectedQn = null;
      this.selectedIng = null;
      this.selectedRecipe = null;
      this.selectedInstruction = null;


    this.userRecipeName.push(this.userRecipeNameInput);
    let recipeO = new Recipe();
    recipeO.addItem(new Item(this.addOrDeleteIng, this.quantityIng));
    recipeO.addInstruction(this.inst);
    this.userRecipeObj.push(recipeO);

  }else if(this.userRecipeName.includes(this.userRecipeNameInput) && this.addOrDeleteIng.match(this.letter) != null && this.quantityIng > 0){
    this.selectedQn = null;
    this.selectedIng = null;

    let index = this.userRecipeName.indexOf(this.userRecipeNameInput);
    this.userRecipeObj[index].addItem(new Item(this.addOrDeleteIng, this.quantityIng));
  }
  }

  deleteRecipe(){
    if(this.selectedRecipe !== null){
    this.userRecipeName.splice(this.userRecipeName.indexOf(this.userRecipeNameInput), 1);
    this.userRecipeObj.splice(this.userRecipeName.indexOf(this.userRecipeNameInput),1);
  }
    // for(let i of this.userRecipeObj[this.edit].INGRIDENTS){
    //
    //   if(this.selectedIng != null ){
    //     let index = this.userRecipeObj[this.edit].INGRIDENTS.indexOf(this.selectIng);
    //     this.userRecipeObj[this.edit].INGRIDENTS.[index];
    //   }else if(i.quantity === this.selectedQn && this.quantityIng > 0){
    //     i.quantity = this.quantityIng;
    //
    //   }
    // }

  }


  selectRecipe(selected){
    this.selectedRecipe = selected;

  }

  selectIng(recipe, i){
    this.edit = i;
    this.selectedIng = recipe.name;
  }

  selectQuantity(recipe){
    this.selectedQn = recipe.quantity;
  }

  selectInstruction(inst){
    this.selectedInstruction = inst;
  }


  editRecipe(){
    let index = this.userRecipeName.indexOf(this.userRecipeNameInput);
    if(index === -1 && this.userRecipeNameInput.match(this.letter) !== null){
      this.userRecipeName[this.userRecipeName.indexOf(this.selectedRecipe)] = this.userRecipeNameInput;
    }

    for(let i of this.userRecipeObj[this.edit].INGRIDENTS){

      if(i.name === this.selectedIng && this.addOrDeleteIng.match(this.letter) != null ){
        i.name = this.addOrDeleteIng;
      }else if(i.quantity === this.selectedQn && this.quantityIng > 0){
        i.quantity = this.quantityIng;
      }
    }

      if(this.userRecipeObj[this.edit].INSTRUCTIONS[0] === this.selectedInstruction){
        this.userRecipeObj[this.edit].INSTRUCTIONS[0] = this.inst;
      }


    this.selectedQn = null;
    this.selectedIng = null;
    this.selectedRecipe = null;
    this.selectedInstruction = null;

  }
}
