import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ArtistSection } from './components/ArtistSection';
import { DemoSection } from './components/DemoSection';
import { MusicCatalog } from './components/MusicCatalog';
import { ShowsSection } from './components/ShowsSection';
import { GallerySection } from './components/GallerySection';
import { ProducerSection } from './components/ProducerSection';
import { ClosingSection } from './components/ClosingSection';
import { Footer } from './components/Footer';
import { LyricsModal } from './components/LyricsModal';
import { ProducerModal } from './components/ProducerModal';
import { PressAssetsModal } from './components/PressAssetsModal';
import { MAIN_TRACK } from './data/epkData';
import { Track } from './types';

export default function App() {
  const [lyricsModalTrack, setLyricsModalTrack] = useState<Track | null>(null);
  const [producerModalOpen, setProducerModalOpen] = useState(false);
  const [pressAssetsModalOpen, setPressAssetsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 font-sans selection:bg-[#ff6038] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenPressAssets={() => setPressAssetsModalOpen(true)}
        onOpenProducerModal={() => setProducerModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenPressAssets={() => setPressAssetsModalOpen(true)}
          onOpenProducerModal={() => setProducerModalOpen(true)}
        />

        {/* 01 / EL ARTISTA - Bio */}
        <ArtistSection
          onOpenPressAssets={() => setPressAssetsModalOpen(true)}
        />

        {/* 02 / MÚSICA & REPERTORIO - Main Track Player */}
        <div id="musica">
          <DemoSection
            onOpenLyrics={() => setLyricsModalTrack(MAIN_TRACK)}
            onOpenProducerModal={() => setProducerModalOpen(true)}
          />

          {/* Discography & Preproduction Songs */}
          <MusicCatalog
            onSelectTrackForLyrics={(track) => setLyricsModalTrack(track)}
            onOpenProducerModal={() => setProducerModalOpen(true)}
          />
        </div>

        {/* 03 / SHOWS & FECHAS 2026 */}
        <ShowsSection />

        {/* 04 / GALERÍA DE FOTOS HD */}
        <GallerySection />

        {/* 05 / PROPUESTA PARA PRODUCTORES */}
        <ProducerSection
          onOpenProducerModal={() => setProducerModalOpen(true)}
        />

        {/* Closing Callout */}
        <ClosingSection
          onOpenPressAssets={() => setPressAssetsModalOpen(true)}
          onOpenProducerModal={() => setProducerModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <LyricsModal
        track={lyricsModalTrack}
        onClose={() => setLyricsModalTrack(null)}
      />

      <ProducerModal
        isOpen={producerModalOpen}
        onClose={() => setProducerModalOpen(false)}
      />

      <PressAssetsModal
        isOpen={pressAssetsModalOpen}
        onClose={() => setPressAssetsModalOpen(false)}
      />
    </div>
  );
}
