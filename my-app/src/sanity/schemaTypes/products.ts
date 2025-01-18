import { defineArrayMember, defineField, defineType } from "sanity";
export const productsSchema = defineType({
    title:"Products",
    name:"product",
    type:"document",
    fields:[
        defineField({
            title:"ID",
            name:"id",
            type:"string",
            description:"It should be Unique for every product so use UUID generator for it.",
            validation:Rule=>Rule.required()
        }),
        defineField({
            title:"Title of Product",
            name:"title",
            type:"string",
            description:"Enter Title or name of product",
            validation:Rule=>Rule.required()
        }),
        defineField({
            title:"Image of Product",
            name:"image",
            type:"image",
            description:"Upload Image of your Product",
            validation:Rule=>Rule.required()
        }),
        defineField({
            title:"Price Without Discount",
            name:"priceWithoutDiscount",
            type:"number",
            description:"Write price without discount if you are not giving discount leave it to 0",
            initialValue:0,

        }),
        defineField({
            title:"Price of Product",
            name:"price",
            type:"number",
            description:"Write actual price of product",
            validation:Rule=>Rule.required()
        }),
        defineField({
            title:"Badge?",
            name:"badge",
            type:"string",
        }),
        defineField({
            title:"Description of product",
            name:"description",
            type:"text",
            validation:Rule=>Rule.required().max(600)
        }),
        defineField({
            title:"Inventory Of Product",
            name:"inventory",
            type:"number",
            validation:Rule=>Rule.required()
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
            description:"Choose Category of product",
            validation:Rule=>Rule.required()
          }),
          defineField({
            title:"Tags of Product",
            name:"tags",
            type:"array",
            of:[
                defineArrayMember({
                    type:"string"
                })
            ],
            options: {
                list: [
                  { title: "Featured", value: "featured" },
                  {
                    title: "Follow products and discounts on Instagram",
                    value: "instagram",
                  },
                  { title: "Gallery", value: "gallery" },
                ],
              },
            validation:Rule=>Rule.required()
        }),
    ]
})