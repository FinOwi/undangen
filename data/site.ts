export interface Theme {
  slug: string
  name: string
  tagline: string
  /** tailwind gradient classes for the card art */
  art: string
  /** overlay text color class */
  artText: string
  badge?: string
}

export const THEMES: Theme[] = [
  {
    slug: "peta-perjalanan",
    name: "Peta Perjalanan",
    tagline: "Kota 3D interaktif: 10 pemberhentian, 13 achievement",
    art: "from-sky-200 via-slate-200 to-emerald-100",
    artText: "text-slate-800",
    badge: "Baru",
  },
  {
    slug: "rpg-cinta",
    name: "RPG Cinta",
    tagline: "Main game: jelajahi kampung, masuki tiap bangunan",
    art: "from-emerald-950 via-stone-950 to-amber-950",
    artText: "text-amber-100",
    badge: "Baru",
  },
  {
    slug: "wisuda-quest",
    name: "Wisuda Quest",
    tagline: "Main game: lewati 8 semester menuju toga",
    art: "from-blue-950 via-stone-950 to-amber-950",
    artText: "text-amber-100",
    badge: "Baru",
  },
  {
    slug: "baroque-rose",
    name: "Baroque Rose",
    tagline: "Undangan elegan: bingkai barok, ornamen emas & bunga",
    art: "from-rose-100 via-amber-100 to-rose-200",
    artText: "text-rose-950",
    badge: "Baru",
  },
  {
    slug: "lakon-cinta",
    name: "Lakon Cinta",
    tagline: "Wayang interaktif: dalang memandu 3 babak lakon",
    art: "from-blue-950 via-indigo-950 to-amber-900",
    artText: "text-amber-100",
    badge: "Baru",
  },
]

export const WA_NUMBER = "6288279406268"
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Halo%20Undangen!%20Saya%20mau%20pesan%20undangan%20digital.`

export function themeDemoUrl(slug: string) {
  return `https://undangen.my.id/tema/${slug}/`
}
