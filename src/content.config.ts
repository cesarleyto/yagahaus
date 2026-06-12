/* src/content.config.ts */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; 

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(), 
    category: z.enum([
      "Marca Personal",
      "Profesionistas",
      "Artistas",
      "Figuras Públicas",
      "Desarrollo Web",
      "Posicionamiento Digital"
    ]),
    description: z.string(),
    image: z.string().optional(), 
  }),
});

const biolinksCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/biolinks" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    tema: z.enum(['oscuro', 'claro']).default('oscuro'),
    colorFondo: z.string().optional(),
    colorAcento: z.string().optional(), 
    colorTexto: z.string().optional(),
    avatar: z.string().optional(),
    descripcion: z.string().optional(),
    pixel_meta: z.string().optional(),
    script_google: z.string().optional(),
    texto_newsletter: z.string().optional(),
    
    // --- ESTRUCTURA CORREGIDA ---
    enlaces: z.array(z.object({
      titulo: z.string(),
      url: z.string().url(),
      icono_predefinido: z.enum([
        'ninguno',
        'simple-icons:spotify',
        'simple-icons:applemusic',
        'simple-icons:youtube',
        'simple-icons:soundcloud',
        'simple-icons:instagram',
        'simple-icons:tiktok',
        'simple-icons:facebook',
        'simple-icons:x',
        'simple-icons:telegram',
        'simple-icons:whatsapp',
        'simple-icons:amazon',
        'simple-icons:amazonmusic',
        'simple-icons:mercadopago',
        'simple-icons:youtubemusic',
        'lucide:globe',
        'lucide:link',
        'lucide:map-pin',
        'lucide:phone',
        'lucide:shopping-cart',
        'lucide:shopping-bag'
      ]).default('ninguno'),
      icono_personalizado: z.string().optional(), // Faltaba esto
    })).optional().default([]), // Cerrado correctamente
    
  }).transform((data) => {
    const esClaro = data.tema === 'claro';
    return {
      ...data,
      colorFondo: data.colorFondo || (esClaro ? '#ffffff' : '#0a0a0a'),
      colorTexto: data.colorTexto || (esClaro ? '#0a0a0a' : '#ffffff'),
      colorAcento: data.colorAcento || '#E91E63',
    };
  })
});

export const collections = {
  'blog': blogCollection,
  'biolinks': biolinksCollection,
};