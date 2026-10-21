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
  {
    slug: "pendakian-cinta",
    name: "Pendakian Cinta",
    tagline: "Game 2D: daki gunung, kumpulkan edelweis, rayakan di puncak",
    art: "from-indigo-950 via-purple-900 to-orange-400",
    artText: "text-amber-100",
    badge: "Baru",
  },
  {
    slug: "siwaluh-jabu",
    name: "Siwaluh Jabu",
    tagline: "Karo: rumah adat bertanduk, tenun uis & jambur",
    art: "from-red-950 via-stone-900 to-amber-200",
    artText: "text-amber-100",
    badge: "Baru",
  },
  {
    slug: "rumah-bolon",
    name: "Rumah Bolon",
    tagline: "Batak Toba: atap pelana menjulang & ukiran gorga",
    art: "from-stone-950 via-red-950 to-amber-100",
    artText: "text-red-100",
    badge: "Baru",
  },
  {
    slug: "pendopo-biru",
    name: "Pendopo Biru",
    tagline: "Elegan Jawa biru: gerbang pendopo, kawung & bunga biru",
    art: "from-sky-100 via-blue-100 to-amber-100",
    artText: "text-blue-950",
    badge: "Baru",
  },
  {
    slug: "rumah-gadang",
    name: "Rumah Gadang",
    tagline: "Elegan Minang: gerbang gonjong, songket pucuak rabuang",
    art: "from-red-950 via-stone-950 to-amber-900",
    artText: "text-amber-100",
    badge: "Baru",
  },
  {
    slug: "pendopo-biru-art",
    name: "Pendopo Biru Art",
    tagline: "Jawa sinematik: lukisan Merapi, toile biru & pendopo emas",
    art: "from-sky-200 via-blue-200 to-amber-100",
    artText: "text-blue-950",
    badge: "Art",
  },
  {
    slug: "siwaluh-jabu-art",
    name: "Siwaluh Jabu Art",
    tagline: "Karo sinematik: lukisan Sinabung, toile merah bata & jambur",
    art: "from-red-900 via-red-950 to-amber-200",
    artText: "text-amber-100",
    badge: "Art",
  },
  {
    slug: "rumah-bolon-art",
    name: "Rumah Bolon Art",
    tagline: "Batak sinematik: lukisan Danau Toba & rumah bolon di tepi danau",
    art: "from-stone-900 via-red-950 to-amber-100",
    artText: "text-red-100",
    badge: "Art",
  },
  {
    slug: "malam-berbintang",
    name: "Malam Berbintang",
    tagline: "Malam elegan interaktif: bintang jatuh & rasi hati di bawah langit emas",
    art: "from-indigo-950 via-slate-900 to-amber-200",
    artText: "text-amber-100",
    badge: "Baru",
  },
  {
    slug: "sinematik-nusantara",
    name: "Sinematik Nusantara",
    tagline: "Demo sinematik: sehari di Tanah Karo, 4 bab ambient",
    art: "from-stone-950 via-emerald-950 to-amber-900",
    artText: "text-amber-100",
    badge: "Demo",
  },
]

export const WA_NUMBER = "6288279406268"
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Halo%20Undangen!%20Saya%20mau%20pesan%20undangan%20digital.`

export function themeDemoUrl(slug: string) {
  return `https://undangen.my.id/tema/${slug}/`
}
