import {Item} from "./Item.class";
import{Recipe} from "./Recipe.class";
export class Fridge{

    CONTENTS: Array<Item> = new Array<Item>();
    /**
    * @function add Adds THE SPECIFIED ITEM TO THE FIRDGE
    * @param item ACCEPT ITEMS TO BE ADDED TO THE FRIDGE
    */
    add(item: Item){
        if(this.CONTENTS.length === 0){
            this.CONTENTS.push(item);
        }else{
        for(let i of this.CONTENTS){
            if(i.name === item.name){
                i.quantity+=item.quantity;
            }

        }

        for(let i of this.CONTENTS){
          if(i.name !== item.name){
        this.CONTENTS.push(item);
      }
      }

        }

    }


    /**
     *
     * @function remove RMEOVES THE ITEM FROM THE FRIDGE
     * @param item ITEM TO BE REMOVED FROM THE FRIDGE
     */
    remove(item: Item){
        if(this.CONTENTS.length !== 0){

        let elementPosition = this.CONTENTS.indexOf(item);
        for (let i of this.CONTENTS) {
        if(i.name === item.name && i.quantity >= item.quantity) {
            i.quantity-=item.quantity;
            return;
        }
        }
        this.CONTENTS.splice(elementPosition, 1);
        }
    }



    /**
     *
     * @function checkRecipe CHECKS THE ITEMS BASED ON RECIPE AND FRIDGE ITEMS
     * @param recipe RECIPE TO BE CHECKED FOR
     * @returns RETURNS TWO LISTS(SHOPPING LIST, CURRENT ITEMS)
     */
    checkRecipe(recipe: Recipe): string[][]{
        let list: string[][] = [[],[]];
        let isInTheFridge = false;
        for(let i of recipe.INGRIDENTS){
            if(i === null){
                list = [[null],[null]];
                return list;
            }
        }
        for (let i of this.CONTENTS) {
            for(let j of recipe.INGRIDENTS){
              let ab = Math.abs(i.quantity - j.quantity);
                if(i.name === j.name && ab <=2
                    &&  ab>0){
                        for(let m of list){
                            m.push(j.name);
                        }

                }else if(i.name === j.name && i.quantity < j.quantity){
                    list[0].push(j.name);

                }else if(i.name === j.name && i.quantity > j.quantity){
                    list[1].push(j.name);
                }
            }
        }

        for(let j of recipe.INGRIDENTS){
            if(!list[0].includes(j.name) && !list[1].includes(j.name)){
                list[0].push(j.name);
            }
        }

        for(let i of list){
            if(i.length === 0 ){
                i.push(null);
            }
        }

        return list;
    }
}
