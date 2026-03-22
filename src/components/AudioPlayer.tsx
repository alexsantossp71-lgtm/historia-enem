'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, 
  SkipBack, SkipForward, Loader2,
  AlertCircle, RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface AudioPlayerProps {
  lessonId: string;
  title: string;
  moduleColor: { bg: string; text: string; gradient: string };
}

const SPEEDS = [
  { value: 0.75, label: '0.75x' },
  { value: 1.0, label: '1.0x' },
  { value: 1.25, label: '1.25x' },
  { value: 1.5, label: '1.5x' },
];

export default function AudioPlayer({ lessonId, title, moduleColor }: AudioPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedSpeed, setSelectedSpeed] = useState(1.0);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [content, setContent] = useState<string>('');
  const [currentText, setCurrentText] = useState<string>('');
  
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const chunksRef = useRef<string[]>([]);
  const currentChunkRef = useRef<number>(0);

  // Load lesson content and voices
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Load lesson content
        const response = await fetch(`/api/lessons/${lessonId}`);
        if (!response.ok) throw new Error('Erro ao carregar aula');
        const lesson = await response.json();
        
        // Clean content for speech
        let text = lesson.content || '';
        text = text.replace(/<[^>]+>/g, ' '); // Remove HTML
        text = text.replace(/#+\s/g, ''); // Remove markdown headers
        text = text.replace(/\*\*(.+?)\*\*/g, '$1'); // Remove bold
        text = text.replace(/\*(.+?)\*/g, '$1'); // Remove italic
        text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'); // Remove links
        text = text.replace(/\s+/g, ' ').trim();
        
        setContent(text);
        
        // Split into chunks (Web Speech API has limits)
        const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
        const chunks: string[] = [];
        let currentChunk = '';
        
        for (const sentence of sentences) {
          if ((currentChunk + sentence).length <= 200) {
            currentChunk += sentence;
          } else {
            if (currentChunk) chunks.push(currentChunk.trim());
            currentChunk = sentence;
          }
        }
        if (currentChunk) chunks.push(currentChunk.trim());
        
        chunksRef.current = chunks;
        currentChunkRef.current = 0;
        
        // Load voices
        const loadVoices = () => {
          const availableVoices = speechSynthesis.getVoices();
          setVoices(availableVoices);
          
          // Find Portuguese voice
          const ptVoice = availableVoices.find(v => 
            v.lang.includes('pt-BR') || 
            v.lang.includes('pt_BR') ||
            v.name.toLowerCase().includes('portuguese') ||
            v.name.toLowerCase().includes('português') ||
            v.name.toLowerCase().includes('brazil')
          );
          
          if (ptVoice) {
            setSelectedVoice(ptVoice);
            console.log('Found Portuguese voice:', ptVoice.name);
          } else {
            console.log('No Portuguese voice found, using default');
            // Use first available voice
            if (availableVoices.length > 0) {
              setSelectedVoice(availableVoices[0]);
            }
          }
          
          setIsLoading(false);
        };
        
        // Voices are loaded asynchronously
        if (speechSynthesis.getVoices().length > 0) {
          loadVoices();
        } else {
          speechSynthesis.addEventListener('voiceschanged', loadVoices);
          // Fallback timeout
          setTimeout(loadVoices, 1000);
        }
        
      } catch (err) {
        console.error('Error loading:', err);
        setError('Erro ao carregar áudio');
        setIsLoading(false);
      }
    };
    
    loadData();
    
    // Cleanup
    return () => {
      speechSynthesis.cancel();
    };
  }, [lessonId]);

  // Speak a chunk
  const speakChunk = useCallback((index: number) => {
    if (index >= chunksRef.current.length) {
      setIsPlaying(false);
      currentChunkRef.current = 0;
      return;
    }
    
    const chunk = chunksRef.current[index];
    currentChunkRef.current = index;
    setCurrentText(chunk.substring(0, 50) + '...');
    
    const utterance = new SpeechSynthesisUtterance(chunk);
    utteranceRef.current = utterance;
    
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    
    utterance.lang = 'pt-BR';
    utterance.rate = rate;
    utterance.pitch = pitch;
    
    utterance.onend = () => {
      // Speak next chunk
      if (currentChunkRef.current < chunksRef.current.length - 1 && isPlaying) {
        speakChunk(currentChunkRef.current + 1);
      } else {
        setIsPlaying(false);
      }
    };
    
    utterance.onerror = (event) => {
      console.error('Speech error:', event.error);
      if (event.error !== 'interrupted') {
        setError('Erro na reprodução');
        setIsPlaying(false);
      }
    };
    
    speechSynthesis.speak(utterance);
  }, [selectedVoice, rate, pitch, isPlaying]);

  // Play/pause toggle
  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      setError(null);
      setIsPlaying(true);
      speakChunk(currentChunkRef.current);
    }
  }, [isPlaying, speakChunk]);

  // Handle speed change
  const handleSpeedChange = (speedValue: string) => {
    const newSpeed = parseFloat(speedValue);
    setSelectedSpeed(newSpeed);
    setRate(newSpeed);
  };

  // Retry
  const handleRetry = () => {
    setError(null);
    setIsLoading(true);
    window.location.reload();
  };

  // Get available voices grouped by language
  const portugueseVoices = voices.filter(v => 
    v.lang.includes('pt') || 
    v.name.toLowerCase().includes('portuguese') ||
    v.name.toLowerCase().includes('português')
  );

  const otherVoices = voices.filter(v => 
    !v.lang.includes('pt') && 
    !v.name.toLowerCase().includes('portuguese') &&
    !v.name.toLowerCase().includes('português')
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className={`px-4 py-3 bg-gradient-to-r ${moduleColor.gradient}`}>
        <div className="flex items-center gap-2 text-white">
          <Volume2 className="w-5 h-5" />
          <span className="font-medium">Ouvir esta aula</span>
          <span className="text-xs opacity-80 ml-auto">
            {selectedVoice ? selectedVoice.name.substring(0, 20) : 'Carregando...'}
          </span>
        </div>
      </div>
      
      {/* Controls */}
      <div className="p-4 space-y-4">
        {error && (
          <div className="flex items-center justify-between gap-2 p-3 bg-amber-50 text-amber-700 rounded-lg text-sm">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRetry}
              className="h-8 px-2 text-amber-700 hover:bg-amber-100"
            >
              <RefreshCw className="w-4 h-4 mr-1" />
              Tentar
            </Button>
          </div>
        )}
        
        {!error && (
          <>
            {/* Voice selector */}
            <div className="space-y-2">
              <label className="text-xs text-slate-500">Voz:</label>
              <select
                value={selectedVoice?.name || ''}
                onChange={(e) => {
                  const voice = voices.find(v => v.name === e.target.value);
                  if (voice) setSelectedVoice(voice);
                }}
                className="w-full h-8 px-2 text-xs border rounded-md bg-white cursor-pointer"
                disabled={isLoading || isPlaying}
              >
                <optgroup label="Português">
                  {portugueseVoices.map((voice) => (
                    <option key={voice.name} value={voice.name}>
                      {voice.name} ({voice.lang})
                    </option>
                  ))}
                </optgroup>
                {otherVoices.length > 0 && (
                  <optgroup label="Outras">
                    {otherVoices.slice(0, 10).map((voice) => (
                      <option key={voice.name} value={voice.name}>
                        {voice.name} ({voice.lang})
                      </option>
                    ))}
                  </optgroup>
                )}
              </select>
            </div>
            
            {/* Current text indicator */}
            {isPlaying && (
              <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded truncate">
                {currentText}
              </div>
            )}
            
            {/* Main controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Skip back */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    speechSynthesis.cancel();
                    currentChunkRef.current = Math.max(0, currentChunkRef.current - 3);
                    if (isPlaying) speakChunk(currentChunkRef.current);
                  }}
                  disabled={isLoading}
                  className="h-9 w-9"
                  title="Voltar"
                >
                  <SkipBack className="w-4 h-4" />
                </Button>
                
                {/* Play/Pause */}
                <Button
                  onClick={togglePlayPause}
                  disabled={isLoading}
                  className={`h-12 w-12 rounded-full ${moduleColor.bg} hover:opacity-90`}
                  title={isPlaying ? 'Pausar' : 'Reproduzir'}
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin text-white" />
                  ) : isPlaying ? (
                    <Pause className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  )}
                </Button>
                
                {/* Skip forward */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    speechSynthesis.cancel();
                    currentChunkRef.current = Math.min(chunksRef.current.length - 1, currentChunkRef.current + 3);
                    if (isPlaying) speakChunk(currentChunkRef.current);
                  }}
                  disabled={isLoading}
                  className="h-9 w-9"
                  title="Avançar"
                >
                  <SkipForward className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Speed selector */}
              <select
                value={selectedSpeed.toString()}
                onChange={(e) => handleSpeedChange(e.target.value)}
                className="h-8 px-2 text-xs border rounded-md bg-white cursor-pointer"
              >
                {SPEEDS.map((speed) => (
                  <option key={speed.value} value={speed.value.toString()}>
                    {speed.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Progress indicator */}
            <div className="text-xs text-slate-500 text-center">
              {chunksRef.current.length > 0 && (
                <span>{currentChunkRef.current + 1} / {chunksRef.current.length} trechos</span>
              )}
            </div>
            
            {/* Instructions */}
            {!isPlaying && !isLoading && (
              <div className="text-sm text-slate-500 text-center">
                Clique em play para ouvir a aula em português
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
