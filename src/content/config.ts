import { z, defineCollection } from 'astro:content';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),
      canonical: z.string().url().optional(),
      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),
      description: z.string().optional(),
      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),
      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),
    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string(),
    metadata: metadataDefinition(),
    url: z.string().optional(),
    price: z.string().optional(), 
    brand: z.string().optional(), 
    galleryPath: z.string().optional(),
    gallery: z
      .record( // Use z.record to allow dynamic keys
        z.array(
          z.object({
            image_path: z.string(),
            'image-caption': z.string().optional(),
            'image-copyright': z.string().optional(),
          })
        )
      )
      .optional(),
  }),
});

const authorsCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    bio: z.string().optional(),
    url: z.string().optional(),
    email: z.string().optional(),
    twitter: z.string().optional(),
    bluesky: z.string().optional(),
  }),
});

export const collections = {
  post: postCollection,
  authors: authorsCollection,
};