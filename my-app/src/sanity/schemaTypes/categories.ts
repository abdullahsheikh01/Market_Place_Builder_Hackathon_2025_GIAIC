import { defineField, defineType } from "sanity";

export const categoriesSchema = defineType({
    title:"Categories",
    name:"category",
    type:"document",
    fields:[
        defineField({
            title:"ID",
            name:"id",
            type:"string",
            description:"It should be Unique for every category so use UUID generator for it.",
            validation:Rule=>Rule.required()
        }),
        defineField({
            title:"Title of Category",
            name:"title",
            type:"string",
            description:"Enter Title or name of category",
            validation:Rule=>Rule.required()
        }),
        defineField({
            title:"Image of Product",
            name:"image",
            type:"image",
            description:"Upload Feature Image of your category",
            validation:Rule=>Rule.required()
        }),
    ]
})