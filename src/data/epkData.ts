import { Track, PressAsset, ProducerPillar, GalleryImage, ShowDate } from '../types';

import fuegoCover from '../assets/images/fuego_conurbano_cover_1786237526432.jpg';
import pressPhoto from '../assets/images/sebastian_zoth_press_1786237542286.jpg';

// Generated gallery photos matching the user uploaded portraits
import imgPortraitCases from '../assets/images/sz_portrait_cases_1786243558555.jpg';
import imgWritingNotebook from '../assets/images/sz_writing_notebook_1786243573251.jpg';
import imgFullbodyBackstage from '../assets/images/sz_fullbody_backstage_1786243589627.jpg';
import imgIntenseCloseup from '../assets/images/sz_intense_closeup_1786243606100.jpg';
import imgGuitarBackstage from '../assets/images/sz_guitar_backstage_1786243622068.jpg';

export const ARTIST_INFO = {
  name: 'SEBASTIÁN ZOTH',
  genre: 'ROCK ARGENTINO / POP ALTERNATIVO',
  tagline: 'Música propia. Energía real. Alma rock.',
  introText: 'Canciones que hablan de la vida real, con la fuerza del rock y la poesía del barrio. Shows para escenarios, empresas, hoteles y eventos privados.',
  quote: 'Canciones que nacen de lo cotidiano, de historias que todos vivimos, pero pocos se animan a contar.',
  location: 'BUENOS AIRES ↔ FLORIANÓPOLIS',
  year: '2026',
  bioParagraph1:
    'Sebastián Zoth es un cantante y compositor argentino. Un proyecto donde conviven el rock nacional, el pop alternativo, la melodía, el barrio y la narrativa urbana. La propuesta une canciones propias con un show en vivo capaz de adaptarse tanto a escenarios musicales como a eventos empresariales y producciones privadas.',
  bioParagraph2:
    'El repertorio trabaja sobre vínculos, memoria, deseo, pérdida, fuga y transformación. La intención es tomar el lenguaje emocional del rock nacional y llevarlo a una producción actual, personal y reconocible.',
  identityTags: ['MELODÍA', 'LETRA', 'ATMÓSFERA URBANA', 'PULSO POP', 'ENERGÍA EN VIVO'],
  soundcloudOfficialUrl: 'https://soundcloud.com/sebastian-zoth-oficial',
  pressEmail: 'sebastianzoth@gmail.com',
  whatsappBrasil: 'https://wa.me/5548996752532?text=Hola%20Sebasti%C3%A1n%2C%20vi%20tu%20Press%20Kit%20y%20quiero%20consultarte.',
  whatsappArgentina: 'https://wa.me/541171023089?text=Hola%20Sebasti%C3%A1n%2C%20vi%20tu%20Press%20Kit%20y%20quiero%20consultarte.',
  pressPhotoUrl: imgPortraitCases,
};

export const GALLERY_PHOTOS: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Sebastián Zoth - Backstage Studio',
    category: 'Portrait',
    url: imgPortraitCases,
    caption: 'Retrato con road cases stencileados "Sebastián Zoth", chaqueta de cuero y gorra.'
  },
  {
    id: 'gal-2',
    title: 'Composición Nocturna',
    category: 'Proceso Creativo',
    url: imgWritingNotebook,
    caption: 'Escribiendo letras y acordes en libreta, vestuario de cuero y noche de lluvia.'
  },
  {
    id: 'gal-3',
    title: 'Corredor de Camarines - Mar del Plata',
    category: 'En Vivo',
    url: imgFullbodyBackstage,
    caption: 'Foto de cuerpo entero en pasillo de camarines junto a flight cases de gira.'
  },
  {
    id: 'gal-4',
    title: 'Actitud & Expresión',
    category: 'Prensa HD',
    url: imgIntenseCloseup,
    caption: 'Retrato dramático de perfil en penumbra con cálidos destellos de escenario.'
  },
  {
    id: 'gal-5',
    title: 'Acústico en Camarines',
    category: 'Ensayo',
    url: imgGuitarBackstage,
    caption: 'Tocando guitarra acústica sobre flight case antes de salir a escena.'
  }
];

export const MAIN_TRACK: Track = {
  id: 'gira',
  title: 'Gira',
  artist: 'Sebastián Zoth',
  subtitle: 'Nuevo Lanzamiento · Single 2026',
  duration: '3:22',
  bpm: 120,
  key: 'Sol Menor (Gm)',
  genre: 'Rock Argentino / Pop Alt',
  soundcloudUrl: 'https://soundcloud.com/sebastian-zoth-oficial',
  soundcloudEmbedUrl:
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2377667759&color=%23ff6038&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true',
  coverImage: fuegoCover,
  description:
    'Nuevo lanzamiento 2026. Canción potente con pulso rítmico de ruta, guitarras distorsionadas y un estribillo expansivo que habla de rodar y transformarse.',
  producerNotes:
    'Gran dinamismo en verso con riff marcado de guitarra y bajo contundente. Estribillo coral para difusión en radio y streaming.',
  chords: 'Gm - Eb - Bb - F',
  lyrics: {
    verse: [
      'Encendemos las luces al borde de la carretera,',
      'las sombras se van quedando en la ciudad.',
      'Llevamos la música como única bandera,',
      'buscando en el viento una nueva verdad.'
    ],
    chorus: [
      'Empieza la gira, la noche se enciende,',
      'no hay fuerza en el mundo que nos detenga hoy.',
      'Siente la vibra que el alma comprende,',
      'sabes exactamente quién soy.'
    ],
    bridge: [
      'Miles de kilómetros bajo las estrellas,',
      'cada escenario deja sus huellas.'
    ]
  }
};

export const DEMO_CATALOG: Track[] = [
  MAIN_TRACK,
  {
    id: 'fuego-en-el-conurbano',
    title: 'Fuego En El Conurbano',
    artist: 'Sebastián Zoth',
    subtitle: 'Demo 01 · Inédito 2026',
    duration: '3:42',
    bpm: 122,
    key: 'Mi Menor (Em)',
    genre: 'Rock Argentino / Pop Alternativo',
    soundcloudUrl: 'https://soundcloud.com/sebastian-zoth-oficial/fuego_en_el_conurbano_sebastia',
    soundcloudEmbedUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2377667759&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    coverImage: fuegoCover,
    description:
      'Una muestra del universo actual de Sebastián Zoth: rock argentino, pulso alternativo y una mirada urbana puesta en el presente.',
    producerNotes:
      'Riff principal conducido por guitarra eléctrica distorsionada con tinte noventero y sintes analógicos. Estructura verso-estribillo clásica con puente expansivo de alta intensidad vocal.',
    chords: 'Verso: Em - C - G - D | Estribillo: C - D - Em - Bm',
    lyrics: {
      verse: [
        'Luces de sodio titilando en la avenida,',
        'el colectivo nocturno me lleva hacia atrás.',
        'Llevo en la mochila promesas vencidas',
        'y este deseo urgente de volver a empezar.'
      ],
      chorus: [
        'Arde el aire, arde el pavimento,',
        'hay fuego en el conurbano esta noche.',
        'Guardamos en el pecho un gran sentimiento',
        'que ni el tiempo ni la distancia consume.'
      ]
    }
  },
  {
    id: 'perdido-sin-ti',
    title: 'Perdido Sin Ti',
    artist: 'Sebastián Zoth',
    subtitle: 'Track 02 · 2026',
    duration: '3:47',
    bpm: 108,
    key: 'Re Menor (Dm)',
    genre: 'Balada Rock / Pop Alt',
    soundcloudUrl: 'https://soundcloud.com/sebastian-zoth-oficial',
    soundcloudEmbedUrl: '',
    coverImage: imgWritingNotebook,
    description: 'Melodía intimista que crece hacia un estribillo catártico. Guitarras envolventes y poesía de medianoche.',
    producerNotes: 'Potencial para preproducción con cuerdas o teclados vintage.',
    lyrics: {
      verse: ['Busco tu sombra en el cristal...', 'las horas pasan sin hablar.'],
      chorus: ['Perdido sin ti en la gran ciudad...', 'buscando un faro en la oscuridad.']
    }
  },
  {
    id: 'munequita-del-barrio',
    title: 'Muñequita Del Barrio',
    artist: 'Sebastián Zoth',
    subtitle: 'Track 03 · 2026',
    duration: '4:11',
    bpm: 126,
    key: 'La Mayor (A)',
    genre: 'Rock Urbano / Power Pop',
    soundcloudUrl: 'https://soundcloud.com/sebastian-zoth-oficial',
    soundcloudEmbedUrl: '',
    coverImage: imgGuitarBackstage,
    description: 'Canción con ritmo constante y guitarras al frente. Homenaje al espíritu de esquina rioplatense.',
    lyrics: {
      verse: ['Caminas por la vereda del bar...', 'con la soltura de quien sabe bailar.'],
      chorus: ['Muñequita del barrio no mires atrás...', 'esta noche la música va a sonar.']
    }
  },
  {
    id: 'vamonos-de-aqui',
    title: 'Vámonos De Aquí',
    artist: 'Sebastián Zoth',
    subtitle: 'Track 04 · 2026',
    duration: '3:35',
    bpm: 118,
    key: 'Do Mayor (C)',
    genre: 'Pop Alt / Rock',
    soundcloudUrl: 'https://soundcloud.com/sebastian-zoth-oficial',
    soundcloudEmbedUrl: '',
    coverImage: imgFullbodyBackstage,
    description: 'Himno rutero sobre escapar del ruido urbano para reencontrarse.',
    lyrics: {
      verse: ['Prende el motor, no lo pienses más...', 'quedan mil rutas por estrenar.'],
      chorus: ['Vámonos de aquí antes del amanecer...', 'tenemos todo por hacer.']
    }
  },
  {
    id: 'sombras-del-ayer',
    title: 'Sombras Del Ayer',
    artist: 'Sebastián Zoth',
    subtitle: 'Track 05 · 2026',
    duration: '4:02',
    bpm: 112,
    key: 'Mi Menor (Em)',
    genre: 'Rock Melódico',
    soundcloudUrl: 'https://soundcloud.com/sebastian-zoth-oficial',
    soundcloudEmbedUrl: '',
    coverImage: imgIntenseCloseup,
    description: 'Atmósfera intensa, bajo presente y reflexiones sobre la memoria.',
    lyrics: {
      verse: ['El tiempo vuela sin avisar...', 'quedan historias por despejar.'],
      chorus: ['Sombras del ayer no me persigan más...', 'hoy aprendí a volar.']
    }
  }
];

export const SHOW_DATES: ShowDate[] = [
  {
    id: 'show-corp',
    type: 'LIVE',
    year: '2026',
    title: 'Show Corporativo & Eventos',
    subtitle: 'Empresas · Hoteles · Lanzamientos de marca',
    format: 'Formato Acústico o Banda Completa',
    whatsappMessage: 'Hola Sebastián, quiero cotizar un show corporativo.',
    ctaText: 'Cotizar Show'
  },
  {
    id: 'show-vip',
    type: 'VIP',
    year: '2026',
    title: 'Evento Privado / Exclusivo',
    subtitle: 'Cenas VIP · Celebraciones · Fiestas privadas',
    format: 'Setlist Personalizado Adaptable',
    whatsappMessage: 'Hola Sebastián, quiero consultar por un evento privado.',
    ctaText: 'Consultar Fecha'
  },
  {
    id: 'show-art',
    type: 'ART',
    year: '2026',
    title: 'Show de Música Original',
    subtitle: 'Salas de conciertos · Festivales · Showcases',
    format: 'Set de Autor Completo (Gira 2026)',
    whatsappMessage: 'Hola Sebastián, quiero consultar por booking de show de autor.',
    ctaText: 'Booking Directo'
  }
];

export const PRODUCER_PILLARS: ProducerPillar[] = [
  {
    number: '01',
    title: 'Dirección artística',
    description:
      'Definir el lenguaje del proyecto y las decisiones que vuelven reconocible cada canción.'
  },
  {
    number: '02',
    title: 'Arreglos + preproducción',
    description:
      'Trabajar estructura, dinámica, instrumentación, tono y carácter antes de la etapa final.'
  },
  {
    number: '03',
    title: 'Voz + producción',
    description:
      'Poner la interpretación en el centro y unir energía de banda con detalle contemporáneo.'
  },
  {
    number: '04',
    title: 'Selección de material',
    description:
      'Priorizar un núcleo breve de canciones capaz de presentar con claridad la nueva etapa de Sebastián Zoth.'
  }
];

export const PRESS_ASSETS: PressAsset[] = [
  {
    id: 'press-photo-1',
    name: 'Retrato Oficial 2026 (Alta Res) - Studio Cases',
    type: 'image',
    size: '4.8 MB',
    description: 'Sebastián Zoth junto a flight cases. Crédito: Prensa Oficial.',
    url: imgPortraitCases
  },
  {
    id: 'press-photo-2',
    name: 'Fotografía Camarines & Gira (Alta Res)',
    type: 'image',
    size: '5.1 MB',
    description: 'Foto de cuerpo entero en corredor de camarines de concierto.',
    url: imgFullbodyBackstage
  },
  {
    id: 'press-photo-3',
    name: 'Proceso Creativo & Ensayo (Alta Res)',
    type: 'image',
    size: '4.2 MB',
    description: 'Componiendo con libreta y guitarra acústica.',
    url: imgGuitarBackstage
  },
  {
    id: 'cover-gira',
    name: 'Portada Oficial: Gira / Fuego En El Conurbano',
    type: 'image',
    size: '3.8 MB',
    description: 'Arte de tapa oficial en resolución 3000x3000px JPG.',
    url: fuegoCover
  },
  {
    id: 'bio-pdf',
    name: 'Press Release & Bio Completa 2026',
    type: 'document',
    size: '1.2 MB',
    description: 'Dossier de prensa completo con biografía, discografía, notas y especificaciones técnicas.',
    url: '#'
  },
  {
    id: 'rider-tecnico',
    name: 'Tech Rider & Stage Map (Directo)',
    type: 'document',
    size: '850 KB',
    description: 'Requerimientos de sonido, canales de mezcla e instrumentación para shows en vivo.',
    url: '#'
  }
];
