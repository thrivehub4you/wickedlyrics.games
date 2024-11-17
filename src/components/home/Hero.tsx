import React from 'react';
import { Music4, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Button } from '../ui/Button';

export function Hero() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Wicked Lyrics Game - Test Your Music Knowledge with Lyric Guessing</title>
        <meta name="description" content="Challenge yourself with Wicked Lyrics Game! Guess artists from lyrics, compete globally, and create AI-powered lyrics. The ultimate music guessing game for music lovers." />
        <meta name="keywords" content="wicked lyrics game, music quiz, lyrics guessing, multiplayer music game" />
      </Helmet>

      <div className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 animate-gradient"></div>
        
        {/* Floating music notes background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 text-6xl animate-float-slow">🎵</div>
          <div className="absolute top-40 right-32 text-5xl animate-float-slower">🎼</div>
          <div className="absolute bottom-32 left-40 text-5xl animate-float">♪</div>
          <div className="absolute bottom-40 right-20 text-6xl animate-float-slow">♫</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-12">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse-slow"></div>
                <Music4 className="h-20 w-20 text-primary-600 relative animate-float" />
              </div>
            </div>
            
            <div className="space-y-8">
              <h1 className="text-6xl md:text-8xl font-bold font-playfair tracking-tight">
                <span className="inline-block animate-slide-up-1 opacity-0">
                  Wicked
                </span>
                <span className="inline-block animate-slide-up-2 opacity-0 bg-gradient-to-r from-primary-600 to-purple-600 text-transparent bg-clip-text">
                  {" "}Lyrics
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-inter leading-relaxed animate-fade-in opacity-0 [animation-delay:1s]">
                The Ultimate Music Guessing Game - Test Your Lyrics Knowledge!
              </p>
              <div className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in opacity-0 [animation-delay:1.2s]">
                <p>Challenge yourself with our extensive collection of song lyrics from various genres and artists.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in opacity-0 [animation-delay:1.5s]">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-lg px-12 py-6"
                onClick={() => navigate('/modes')}
              >
                <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                Play Wicked Lyrics Game
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 hover:bg-primary-50 text-lg px-12 py-6"
                onClick={() => navigate('/create')}
              >
                <Sparkles className="h-6 w-6 mr-3" />
                Create AI Lyrics
              </Button>
            </div>
          </div>

          {/* SEO-friendly feature highlights */}
          <div className="mt-24 grid md:grid-cols-3 gap-8 animate-fade-in opacity-0 [animation-delay:2s]">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Extensive Song Library</h2>
              <p>Thousands of lyrics from various genres and artists to test your knowledge</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Multiplayer Challenges</h2>
              <p>Compete with friends or players worldwide in real-time music battles</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">AI Lyrics Creation</h2>
              <p>Generate unique lyrics using our advanced AI technology</p>
            </div>
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
    </>
  );
}