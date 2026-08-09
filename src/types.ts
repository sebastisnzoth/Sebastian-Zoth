export interface Track {
  id: string;
  title: string;
  artist: string;
  subtitle?: string;
  duration: string;
  bpm: number;
  key: string;
  genre: string;
  soundcloudUrl: string;
  soundcloudEmbedUrl: string;
  coverImage: string;
  audioUrl?: string; // fallback / preview audio loop
  description: string;
  lyrics: {
    verse: string[];
    chorus: string[];
    bridge?: string[];
  };
  chords?: string;
  producerNotes?: string;
}

export interface PressAsset {
  id: string;
  name: string;
  type: 'image' | 'document' | 'audio' | 'zip';
  size: string;
  description: string;
  url: string;
}

export interface ProducerPillar {
  number: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  url: string;
  aspectRatio?: string;
  caption: string;
}

export interface ShowDate {
  id: string;
  type: 'LIVE' | 'VIP' | 'ART';
  year: string;
  title: string;
  subtitle: string;
  format: string;
  whatsappMessage: string;
  ctaText: string;
}

export interface ProducerInquiry {
  name: string;
  email: string;
  role: string;
  organization: string;
  message: string;
  preferredTrack: string;
}
