export default {
 name: "product",
 title: "Product",
 type: "document",
 fields: [
  {
   name: "name",
   title: "Name",
   type: "string",
  },
  {
   name: "price",
   title: "Price",
   type: "number",
  },
  {
   name: "description",
   title: "Description",
   type: "text",
  },
  {
   name: "image",
   title: "Image",
   type: "image",
   options: {
    hotspot: true,
   },
   fields: [
    {
     name: "alt",
     title: "Alt Text",
     type: "string",
    },
   ],
  },
  {
   name: "slug",
   title: "Slug",
   type: "slug",
   options: {
    source: "name",
    maxLength: 96,
   },
  },
  {
   name: "brand",
   title: "Brand",
   type: "string",
  },
  {
   name: "category",
   title: "Category",
   type: "string",
  },
  {
   name: "rating",
   title: "Rating",
   type: "number",
  },
  {
   name: "countInStock",
   title: "CountInStock",
   type: "number",
  },
 ],
};
