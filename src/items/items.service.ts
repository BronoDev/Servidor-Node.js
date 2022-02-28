/**
 * Data Model Interfaces
 */

import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";
/**
 * In-Memory store
 */

let items : Items = {
    1 : {
        id : 1,
        name: "Hamburguer",
        price: 120,
        description: "Hamburgao de carne",
        image: "https://img.cybercook.com.br/imagens/receitas/283/hamburguer-de-carne-de-sol.jpg"
    } ,
    
    2: {
        id : 2,
        name: "pizza",
        price: 300,
        description: "pizza de carne",
        image: ""
    } ,

    3: {
        id : 2,
        name: "chá",
        price: 400,
        description: "chá de hortelã",
        image: "https://ncultura.pt/wp-content/uploads/2020/06/cha-de-hortela-seus-beneficios-e-como-fazer-para-emagrecer.jpg",
    } ,
};


/**
 * Service Methods
 */

    export const findAll = async (): Promise<Item[]> => Object.values(items);

    export const find = async (id: number) : Promise<Item> => items[id];

    export const create =async (newItem: BaseItem) : Promise<Item> => {

        const id = new Date().valueOf ();

        items[id] = {
            id,
            ...newItem,
        }

        return items[id];
    }

    export const update = async (
        id: number,
        itemUpdate: BaseItem
    ): Promise<Item | null> => {
        const item = await find(id);
        if (!item) {
            return null;
        }
        items[id] = {id, ...itemUpdate};

        return items[id];
    }

    export const remove = async (id: number): Promise<null | void> => {
        const item = await find(id);
        if (!item) {
            return null;
        }
        
        delete item[id];
}