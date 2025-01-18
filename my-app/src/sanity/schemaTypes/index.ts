import { type SchemaTypeDefinition } from 'sanity'
import { productsSchema } from './products'
import { categoriesSchema } from './categories'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productsSchema,categoriesSchema],
}