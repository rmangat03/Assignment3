import {Recipe} from "./Recipe.class";
import {Item} from "./Item.class";
import {Fridge} from "./Fridge.class";

describe("Placeholder", function(){

    beforeEach(function () {

    });
    it("Recipe add ingridents test for one item", function(){
        let recipe = new Recipe();
        let item = new Item("apple", 5);
        recipe.addItem(item);
        expect(recipe.INGRIDENTS).toContain(item);
    });

    it("Recipe add ingridents test for multiple items, instructions and null", function () {
        let recipe = new Recipe();
        let itemsToBeAdded: Item[] = [new Item("apple" ,3), new Item("sweet",2), new Item("flour", 8), new Item(null, null)];
        let instructionsToBeAdded: string[] = ["Chop the apple", "Put some sweetener", "mix with flour and enjoy"];
        for(let i=0; i<itemsToBeAdded.length; i++){
            recipe.addItem(itemsToBeAdded[i]);
            recipe.addInstruction(instructionsToBeAdded[i]);
            expect(recipe.INGRIDENTS).toContain(itemsToBeAdded[i]);
            expect(recipe.INSTRUCTIONS[i]).toBe(instructionsToBeAdded[i]);
        }
    });
    it("Fridge add item test", function(){
      let fridge = new Fridge();
        fridge.add(new Item("bananas", 6));
        let itemsToBeAdded: Item[] = [new Item("bananas", 6), new Item("peanut", 6), new Item("milk", 3)];
        let afterAddItems: Item[] = [new Item("bananas", 12), new Item("peanut", 6), new Item("milk", 3)];
        for (let i of itemsToBeAdded) {
            fridge.add(i);
        }
        for(let i of afterAddItems){
            expect(fridge.CONTENTS).toContain(i);
        }
    });

    it("Fridge remove item test", function(){
      let fridge = new Fridge();
      let itemsToBeAdded: Item[] = [new Item("bananas", 12), new Item("peanut", 6), new Item("milk", 3)];
      for (let i of itemsToBeAdded) {
          fridge.add(i);
      }

        let itemsToBeRemoved: Item[] = [new Item("peanut", 2), new Item("milk", 4)];
        let afterRemovedItems: Item[] = [new Item("bananas", 12), new Item("peanut", 4)];
        for (let i of itemsToBeRemoved) {
            fridge.remove(i);
        }

        for (let i of afterRemovedItems) {
            expect(fridge.CONTENTS).toContain(i);
        }

        for (let i of fridge.CONTENTS){
            console.log(i);
        }
    });

    it("Fridge Check recipe test", function(){
      let fridge = new Fridge();
      let fridgeItems : Item[] = [new Item("bananas", 12), new Item("peanut", 4), new Item("apple", 5)];
      for(let i of fridgeItems){
        fridge.add(i);
      }
        let itemsToBeAdded: Item[] = [new Item("cashews", 20), new Item("almonds", 20), new Item("bananas", 13), new Item("peanut", 5), new Item("apple", 2) ];
        let originalList: string[][] = [["cashews", "almonds", "bananas", "peanut"], ["bananas", "apple"]];
        let recipe = new Recipe();
        for (let i of itemsToBeAdded) {
            recipe.addItem(i);
        }
        let returnedList: string[][] = fridge.checkRecipe(recipe);
        for (let i=0; i<returnedList.length; i++) {
            for(let j=0; j<i; j++){
            
                expect(returnedList[i]).toContain(originalList[i][j]);
            }
        }
    })
});
