import {Item} from "./Item.class";
export class Recipe{
    INGRIDENTS: Array<Item> = new Array<Item>();
    INSTRUCTIONS: Array<string> = new Array<string>();
    ESTIMATEDTIME: number;
    NAME: string;

    /**
     * @function addItem ADDS THE ITEMS TO THE INGRIDENT
     * @param item ITEM FOR RECIPE TO ADD
     */
    addItem(item: Item){
      if(this.INGRIDENTS.length === 0){
        this.INGRIDENTS.push(item);
        return;
      }
      for(let i of this.INGRIDENTS){
        if(i.name === item.name){
        i.quantity+=item.quantity;
        return;
        }
      }

          this.INGRIDENTS.push(item);

    }

    /**
     * @function addInstruction ADD THE INSTRUCTIONS FOR THE RECIPE
     * @param instruction INSTRUCTIONS FOR THE RECIPE
     */
    addInstruction(instruction: string){
        this.INSTRUCTIONS.push(instruction);
    }

    setName(name: string){
      this.NAME = name;
    }
}
