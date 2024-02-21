import { defineField, defineType } from "sanity";

const GROUPS = [
  {
    name: "editorial",
    title: "Editorial",
    default: true,
  },
  {
    name: "shopifySync",
    title: "Shopify sync",
  },
  {
    name: "seo",
    title: "SEO",
  },
];

export default defineType({
  name: "product",
  title: "Product",
  type: "document",

  groups: GROUPS,
  fields: [
    defineField({
      name: "hidden",
      type: "string",

      group: GROUPS.map((group) => group.name),
      hidden: ({ parent }) => {
        const isActive = parent?.store?.status === "active";
        const isDeleted = parent?.store?.isDeleted;
        return !parent?.store || (isActive && !isDeleted);
      },
    }),
    // Title (proxy)

    // Slug (proxy)
  ],
  orderings: [
    {
      name: "titleAsc",
      title: "Title (A-Z)",
      by: [{ field: "store.title", direction: "asc" }],
    },
    {
      name: "titleDesc",
      title: "Title (Z-A)",
      by: [{ field: "store.title", direction: "desc" }],
    },
    {
      name: "priceDesc",
      title: "Price (Highest first)",
      by: [{ field: "store.priceRange.minVariantPrice", direction: "desc" }],
    },
    {
      name: "priceAsc",
      title: "Price (Lowest first)",
      by: [{ field: "store.priceRange.minVariantPrice", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      isDeleted: "store.isDeleted",
      options: "store.options",
      previewImageUrl: "store.previewImageUrl",
      priceRange: "store.priceRange",
      status: "store.status",
      title: "store.title",
      variants: "store.variants",
    },
  },
});
