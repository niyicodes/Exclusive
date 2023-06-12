import { deskTool } from 'sanity/desk'
import category from './schema/category'
import product from './schema/product'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { visionTool } from '@sanity/vision'


export const config = {
 projectId: 'vzcw8bsk',
 dataset: 'production',
 apiVersion: '',
 title: 'Exclusive',
 basePath: '/admin',
 plugins: [deskTool(), unsplashImageAsset(),visionTool()],
 schema: {
  types: [product, category]
 }
}