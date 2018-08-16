export interface Ingredient {
    ingredient: string;
    measure: string;
}

export interface Instruction {
    instruction: string;
    photo: string;
}

export interface Recipe {
    decription: string;
    instructions: Instruction[];
    ingredients: Ingredient[];
    cover_photo: string;
}
