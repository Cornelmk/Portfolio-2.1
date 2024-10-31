import { z } from 'zod';

export const projectSchema = z.object({
    id: z.number().optional(),
    title: z.string().min(1, "Title is required"),
    description: z.string().optional(),
    createAt: z.string().optional(),
    category: z.string().min(1, "Category is required"),
    publishedAt: z.string().nullable().optional(),
    public: z.boolean().optional().default(false),
    status: z.enum(['draft', 'published']).optional().default('draft'),
    tags: z.array(z.string()).optional().default([]),
});

export type Project = z.infer<typeof projectSchema>;

export const validateProject = (data: unknown) => {
    return projectSchema.safeParse(data);
};