/**
 * Created by wenjuntan on 2016-12-22.
 */

export class Product{
    constructor(
        public sku: string,
        public name: string,
        public imageUrl: string,
        public department: string[],
        public price: number
    ){

    }
}