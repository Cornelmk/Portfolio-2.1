import { z } from 'zod';

export const projectSchema = z.object({
    id: z.number().optional(),
    title: z.string().min(1, "Title is required"),
    category: z.string().min(1, "Category is required"),
    description: z.string().optional(),
    publishedAt: z.string().nullable().optional(),
    status: z.enum(['draft', 'published']).optional().default('draft'),
    public: z.boolean().default(false),
    tags: z.array(z.string()).optional().default([]),
});

export type Project = z.infer<typeof projectSchema>;

export const validateProject = (data: unknown) => {
    return projectSchema.safeParse(data);
};