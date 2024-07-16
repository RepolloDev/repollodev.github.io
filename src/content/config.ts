import { defineCollection, z, reference } from "astro:content"

const techs = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        icon: z.string(),
        color: z.string()
    })
})

const proyects = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        cover: z.string(),
        //link: z.string().url().optional(),
        tags: z.array(z.string()),
        date: z.date().optional(),
    })
})

export { techs, proyects }