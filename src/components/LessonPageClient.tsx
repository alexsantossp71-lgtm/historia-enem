'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, ArrowRight, Clock, CheckCircle2, BookOpen, Brain,
  Home, ChevronRight, Lightbulb, Quote, AlertCircle, Info,
  Sparkles, Trophy, Star, RotateCcw, Shuffle, Check, X,
  Target, Zap, Clock3, LayoutGrid, ListOrdered, GripVertical,
  Award, Heart, Swords, Crown, Flag, Landmark, Castle, Globe,
  Users, Scroll, Factory, Shield, Sun, Ship, Tent, Building2, Earth,
  Feather
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import AudioPlayer from '@/components/AudioPlayer';
import StorySection from '@/components/StorySection';
import { markLessonComplete } from '@/lib/local-storage';

interface LessonData {
  id: string;
  title: string;
  content: string;
  duration: number;
  module: {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
  };
  isCompleted: boolean;
  quiz: { id: string; questionCount: number } | null;
}

interface LessonPageClientProps {
  lesson: LessonData;
  prevLesson: { id: string; title: string } | null;
  nextLesson: { id: string; title: string } | null;
}

const colorMap: Record<string, { bg: string; light: string; text: string; gradient: string; border: string }> = {
  amber: { bg: 'bg-amber-500', light: 'bg-amber-50', text: 'text-amber-600', gradient: 'from-amber-500 to-orange-600', border: 'border-amber-200' },
  purple: { bg: 'bg-purple-500', light: 'bg-purple-50', text: 'text-purple-600', gradient: 'from-purple-500 to-violet-600', border: 'border-purple-200' },
  green: { bg: 'bg-green-500', light: 'bg-green-50', text: 'text-green-600', gradient: 'from-green-500 to-emerald-600', border: 'border-green-200' },
  red: { bg: 'bg-red-500', light: 'bg-red-50', text: 'text-red-600', gradient: 'from-red-500 to-rose-600', border: 'border-red-200' },
  slate: { bg: 'bg-slate-500', light: 'bg-slate-50', text: 'text-slate-600', gradient: 'from-slate-500 to-gray-600', border: 'border-slate-200' },
  teal: { bg: 'bg-teal-500', light: 'bg-teal-50', text: 'text-teal-600', gradient: 'from-teal-500 to-cyan-600', border: 'border-teal-200' },
  yellow: { bg: 'bg-yellow-500', light: 'bg-yellow-50', text: 'text-yellow-600', gradient: 'from-yellow-500 to-amber-600', border: 'border-yellow-200' },
  orange: { bg: 'bg-orange-500', light: 'bg-orange-50', text: 'text-orange-600', gradient: 'from-orange-500 to-red-600', border: 'border-orange-200' },
  emerald: { bg: 'bg-emerald-500', light: 'bg-emerald-50', text: 'text-emerald-600', gradient: 'from-emerald-500 to-teal-600', border: 'border-emerald-200' },
};

const iconMap: Record<string, string> = {
  Ship: 'Ship',
  Crown: 'Crown',
  Building2: 'Building2',
  Factory: 'Factory',
  Shield: 'Shield',
  Globe: 'Globe',
  Tent: 'Tent',
  Landmark: 'Landmark',
  Castle: 'Castle',
  Sun: 'Sun',
  Lightbulb: 'Lightbulb',
  Target: 'Target',
  Earth: 'Earth',
};

// Map icon names to components
const IconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  Ship: Ship,
  Crown: Crown,
  Building2: Factory,
  Factory: Factory,
  Shield: Shield,
  Globe: Globe,
  Tent: Users,
  Landmark: Landmark,
  Castle: Castle,
  Sun: Sun,
  Lightbulb: Lightbulb,
  Target: Target,
  Earth: Globe,
};

// Content images based on keywords
const contentImages: Record<string, { url: string; alt: string; caption: string }> = {
  'egito': { url: '/images/lessons/egito.png', alt: 'Pirâmides do Egito', caption: 'As grandes pirâmides de Gizé, símbolo do poder faraônico' },
  'grécia': { url: '/images/lessons/grecia.png', alt: 'Acrópole de Atenas', caption: 'A Acrópole, centro da democracia ateniense' },
  'roma': { url: '/images/lessons/roma.png', alt: 'Coliseu Romano', caption: 'O Coliseu, maior anfiteatro do Império Romano' },
  'médiaval': { url: '/images/lessons/medieval.png', alt: 'Castelo Medieval', caption: 'Castelos símbolizavam o poder feudal' },
  'medieval': { url: '/images/lessons/medieval.png', alt: 'Castelo Medieval', caption: 'Castelos símbolizavam o poder feudal' },
  'renascimento': { url: '/images/lessons/renascimento.png', alt: 'Renascimento', caption: 'O Renascimento floresceu na Itália' },
  'revolução': { url: '/images/lessons/revolucao.png', alt: 'Revolução Francesa', caption: 'A Quedada da Bastilha, 1789' },
  'revoluções': { url: '/images/lessons/revolucao.png', alt: 'Revoluções', caption: 'As revoluções transformaram o mundo' },
  'industrial': { url: '/images/lessons/industrial.png', alt: 'Revolução Industrial', caption: 'A Revolução Industrial mudou as formas de produção' },
  'brasil': { url: '/images/lessons/brasil.png', alt: 'Brasil Colonial', caption: 'O Brasil foi colônia portuguesa por mais de 300 anos' },
  'colonial': { url: '/images/lessons/colonial.png', alt: 'Brasil Colonial', caption: 'O ciclo do ouro em Minas Gerais' },
  'império': { url: '/images/lessons/imperio.png', alt: 'Império do Brasil', caption: 'O Império do Brasil durou de 1822 a 1889' },
  'república': { url: '/images/lessons/republica.png', alt: 'Proclamação da República', caption: 'A Proclamação da República em 1889' },
  'ditadura': { url: '/images/lessons/ditadura.png', alt: 'Ditadura Militar', caption: 'O período militar brasileiro (1964-1985)' },
  'guerra': { url: '/images/lessons/guerra.png', alt: 'Guerras Mundiais', caption: 'As guerras mundiais moldaram o século XX' },
  'áfrica': { url: '/images/lessons/africa.png', alt: 'África', caption: 'A rica história do continente africano' },
  'américa': { url: '/images/lessons/america.png', alt: 'América', caption: 'A colonização das Américas' },
  'indígena': { url: '/images/lessons/indigena.png', alt: 'Povos Originários', caption: 'Os povos indígenas do Brasil' },
  'pré-história': { url: '/images/lessons/pre-historia.png', alt: 'Pré-História', caption: 'Arte rupestre do período paleolítico' },
};

function getColors(colorName: string) {
  return colorMap[colorName] || colorMap.amber;
}

function getIconName(iconName: string): string {
  return iconMap[iconName] || 'BookOpen';
}

function IconRenderer({ name, className }: { name: string; className?: string }) {
  const Component = IconComponents[name] || BookOpen;
  return <Component className={className} />;
}

// Flashcard Game Component
function FlashcardGame({ lessonId, moduleColor }: { lessonId: string; moduleColor: { bg: string; text: string; gradient: string } }) {
  const [cards, setCards] = useState<{ front: string; back: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [learning, setLearning] = useState(0);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    fetch(`/api/flashcards/${lessonId}`)
      .then(res => res.json())
      .then(data => {
        setCards(data.cards || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [lessonId]);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    } else {
      setCompleted(true);
    }
  };

  const handleKnown = () => {
    setKnown(prev => prev + 1);
    handleNext();
  };

  const handleLearning = () => {
    setLearning(prev => prev + 1);
    handleNext();
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnown(0);
    setLearning(0);
    setCompleted(false);
  };

  if (loading) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-slate-200 rounded-xl"></div>
            <div className="h-4 bg-slate-200 rounded w-32"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (cards.length === 0) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 text-center">
          <Brain className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500">Flashcards disponíveis em breve!</p>
        </CardContent>
      </Card>
    );
  }

  if (completed) {
    return (
      <Card className="border-0 shadow-lg overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${moduleColor.gradient}`} />
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${moduleColor.gradient} flex items-center justify-center`}>
              <Trophy className="w-10 h-10 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Parabéns!</h3>
          <p className="text-slate-600 mb-4">Você revisou todos os flashcards!</p>
          <div className="flex justify-center gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{known}</div>
              <div className="text-sm text-slate-500">Dominei</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">{learning}</div>
              <div className="text-sm text-slate-500">Aprendendo</div>
            </div>
          </div>
          <Button onClick={handleRestart} className={`bg-gradient-to-r ${moduleColor.gradient} text-white`}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Praticar Novamente
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-lg overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${moduleColor.gradient}`} />
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className="text-sm">
            <Zap className="w-3 h-3 mr-1" />
            Flashcards
          </Badge>
          <span className="text-sm text-slate-500">{currentIndex + 1} de {cards.length}</span>
        </div>
        
        <Progress value={((currentIndex + 1) / cards.length) * 100} className="mb-6 h-2" />
        
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          className="relative h-48 cursor-pointer perspective-1000"
        >
          <div className={cn(
            "absolute inset-0 rounded-2xl p-6 flex items-center justify-center text-center transition-all duration-500 transform-style-preserve-3d",
            isFlipped ? "rotate-y-180" : "",
            `bg-gradient-to-br ${moduleColor.gradient}`
          )}>
            <div className={cn(
              "text-white text-xl font-medium",
              isFlipped ? "opacity-0" : "opacity-100"
            )}>
              {cards[currentIndex]?.front}
            </div>
          </div>
          {isFlipped && (
            <div className={cn(
              "absolute inset-0 rounded-2xl p-6 flex items-center justify-center text-center",
              "bg-white border-2 shadow-lg",
              moduleColor.border
            )}>
              <p className="text-lg text-slate-700">{cards[currentIndex]?.back}</p>
            </div>
          )}
        </div>
        
        <p className="text-center text-sm text-slate-400 mt-4 mb-4">
          Clique no card para virar
        </p>
        
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1 border-amber-300 text-amber-600 hover:bg-amber-50"
            onClick={handleLearning}
          >
            <Heart className="w-4 h-4 mr-2" />
            Aprendendo
          </Button>
          <Button 
            className={`flex-1 bg-gradient-to-r ${moduleColor.gradient} text-white`}
            onClick={handleKnown}
          >
            <Check className="w-4 h-4 mr-2" />
            Dominei
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Timeline Game Component
function TimelineGame({ lessonId, moduleColor }: { lessonId: string; moduleColor: { bg: string; text: string; gradient: string } }) {
  const [events, setEvents] = useState<{ id: number; year: string; event: string; order: number }[]>([]);
  const [userOrder, setUserOrder] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(`/api/timeline/${lessonId}`)
      .then(res => res.json())
      .then(data => {
        const shuffled = [...(data.events || [])].sort(() => Math.random() - 0.5);
        setEvents(data.events || []);
        setUserOrder(shuffled.map((e: { id: number }) => e.id));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [lessonId]);

  const moveEvent = (fromIndex: number, direction: 'up' | 'down') => {
    const toIndex = direction === 'up' ? fromIndex - 1 : fromIndex + 1;
    if (toIndex < 0 || toIndex >= userOrder.length) return;
    
    const newOrder = [...userOrder];
    const [removed] = newOrder.splice(fromIndex, 1);
    newOrder.splice(toIndex, 0, removed);
    setUserOrder(newOrder);
  };

  const handleCheck = () => {
    const correctOrder = [...events].sort((a, b) => a.order - b.order).map(e => e.id);
    let correct = 0;
    userOrder.forEach((id, index) => {
      if (id === correctOrder[index]) correct++;
    });
    setScore(Math.round((correct / events.length) * 100));
    setShowResult(true);
  };

  const handleRestart = () => {
    const shuffled = [...events].sort(() => Math.random() - 0.5);
    setUserOrder(shuffled.map(e => e.id));
    setShowResult(false);
    setScore(0);
  };

  const getUserEvent = (id: number) => events.find(e => e.id === id);

  if (loading) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-slate-200 rounded-xl"></div>
            <div className="h-4 bg-slate-200 rounded w-32"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (events.length === 0) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 text-center">
          <Clock3 className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500">Linha do tempo disponível em breve!</p>
        </CardContent>
      </Card>
    );
  }

  if (showResult) {
    const correctOrder = [...events].sort((a, b) => a.order - b.order);
    return (
      <Card className="border-0 shadow-lg overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${moduleColor.gradient}`} />
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${score >= 70 ? 'from-green-500 to-emerald-600' : 'from-amber-500 to-orange-600'} flex items-center justify-center`}>
                {score >= 70 ? <Trophy className="w-10 h-10 text-white" /> : <Target className="w-10 h-10 text-white" />}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">{score >= 70 ? 'Excelente!' : 'Continue praticando!'}</h3>
            <div className="text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-2">
              {score}%
            </div>
            <p className="text-slate-600">de acertos na ordem cronológica</p>
          </div>
          
          <div className="mb-6">
            <p className="text-sm font-medium text-slate-500 mb-3">Ordem correta:</p>
            <div className="space-y-2">
              {correctOrder.map((event, index) => {
                const userIndex = userOrder.indexOf(event.id);
                const isCorrect = userIndex === index;
                return (
                  <div 
                    key={event.id}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg border",
                      isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                      isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white"
                    )}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-800">{event.event}</div>
                      <div className="text-sm text-slate-500">{event.year}</div>
                    </div>
                    {isCorrect ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          <Button onClick={handleRestart} className={`w-full bg-gradient-to-r ${moduleColor.gradient} text-white`}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Tentar Novamente
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-lg overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${moduleColor.gradient}`} />
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className="text-sm">
            <ListOrdered className="w-3 h-3 mr-1" />
            Linha do Tempo
          </Badge>
          <span className="text-sm text-slate-500">{events.length} eventos</span>
        </div>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
          <p className="text-amber-800 text-sm font-medium">
            🎯 Ordene os eventos do mais antigo para o mais recente, usando seu conhecimento histórico!
          </p>
          <p className="text-amber-700 text-xs mt-1">As datas serão reveladas após verificar sua resposta.</p>
        </div>
        
        <div className="space-y-2 mb-6">
          {userOrder.map((eventId, index) => {
            const event = getUserEvent(eventId);
            if (!event) return null;
            return (
              <div 
                key={eventId}
                className="flex items-center gap-2 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => moveEvent(index, 'up')}
                    disabled={index === 0}
                    className="w-7 h-7 rounded flex items-center justify-center bg-slate-200 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    title="Mover para cima"
                  >
                    <ArrowLeft className="w-4 h-4 rotate-90" />
                  </button>
                  <button
                    onClick={() => moveEvent(index, 'down')}
                    disabled={index === userOrder.length - 1}
                    className="w-7 h-7 rounded flex items-center justify-center bg-slate-200 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    title="Mover para baixo"
                  >
                    <ArrowRight className="w-4 h-4 -rotate-90" />
                  </button>
                </div>
                <div className={`w-10 h-10 rounded-full ${moduleColor.bg} text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md`}>
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-slate-800">{event.event}</div>
                </div>
                <GripVertical className="w-5 h-5 text-slate-400 flex-shrink-0" />
              </div>
            );
          })}
        </div>
        
        <Button onClick={handleCheck} className={`w-full bg-gradient-to-r ${moduleColor.gradient} text-white`}>
          <Check className="w-4 h-4 mr-2" />
          Verificar Minha Resposta
        </Button>
      </CardContent>
    </Card>
  );
}

// Match Pairs Game Component  
function MatchPairsGame({ lessonId, moduleColor }: { lessonId: string; moduleColor: { bg: string; text: string; gradient: string } }) {
  const [pairs, setPairs] = useState<{ id: number; term: string; definition: string }[]>([]);
  const [selectedTerm, setSelectedTerm] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [wrongPair, setWrongPair] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [shuffledDefinitions, setShuffledDefinitions] = useState<{ id: number; definition: string }[]>([]);

  useEffect(() => {
    fetch(`/api/match-pairs/${lessonId}`)
      .then(res => res.json())
      .then(data => {
        setPairs(data.pairs || []);
        setShuffledDefinitions([...(data.pairs || [])].sort(() => Math.random() - 0.5).map(p => ({ id: p.id, definition: p.definition })));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [lessonId]);

  const handleTermClick = (id: number) => {
    if (matched.includes(id)) return;
    setSelectedTerm(id === selectedTerm ? null : id);
  };

  const handleDefinitionClick = (defId: number) => {
    if (!selectedTerm || matched.includes(defId)) return;
    
    if (selectedTerm === defId) {
      setMatched([...matched, defId]);
      setSelectedTerm(null);
    } else {
      setWrongPair(defId);
      setTimeout(() => setWrongPair(null), 1000);
    }
  };

  const handleRestart = () => {
    setMatched([]);
    setSelectedTerm(null);
    setShuffledDefinitions([...pairs].sort(() => Math.random() - 0.5).map(p => ({ id: p.id, definition: p.definition })));
  };

  if (loading) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-slate-200 rounded-xl"></div>
            <div className="h-4 bg-slate-200 rounded w-32"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (pairs.length === 0) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 text-center">
          <LayoutGrid className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500">Jogo de associação disponível em breve!</p>
        </CardContent>
      </Card>
    );
  }

  if (matched.length === pairs.length) {
    return (
      <Card className="border-0 shadow-lg overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${moduleColor.gradient}`} />
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${moduleColor.gradient} flex items-center justify-center`}>
              <Trophy className="w-10 h-10 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Perfeito!</h3>
          <p className="text-slate-600 mb-6">Você conectou todos os pares!</p>
          <Button onClick={handleRestart} className={`bg-gradient-to-r ${moduleColor.gradient} text-white`}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Jogar Novamente
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-lg overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${moduleColor.gradient}`} />
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className="text-sm">
            <LayoutGrid className="w-3 h-3 mr-1" />
            Conecte os Pares
          </Badge>
          <span className="text-sm text-slate-500">{matched.length}/{pairs.length} pares</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-500 mb-2">Termos</p>
            {pairs.map(pair => (
              <button
                key={`term-${pair.id}`}
                onClick={() => handleTermClick(pair.id)}
                disabled={matched.includes(pair.id)}
                className={cn(
                  "w-full p-3 rounded-lg text-left text-sm transition-all border-2",
                  matched.includes(pair.id) && "bg-green-50 border-green-300 text-green-700",
                  selectedTerm === pair.id && !matched.includes(pair.id) && `${moduleColor.light} ${moduleColor.border} ${moduleColor.text}`,
                  !matched.includes(pair.id) && selectedTerm !== pair.id && "bg-white border-slate-200 hover:border-slate-300"
                )}
              >
                {pair.term}
              </button>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-500 mb-2">Definições</p>
            {shuffledDefinitions.map(def => (
              <button
                key={`def-${def.id}`}
                onClick={() => handleDefinitionClick(def.id)}
                disabled={matched.includes(def.id)}
                className={cn(
                  "w-full p-3 rounded-lg text-left text-sm transition-all border-2",
                  matched.includes(def.id) && "bg-green-50 border-green-300 text-green-700",
                  wrongPair === def.id && "bg-red-50 border-red-300 text-red-700 animate-shake",
                  !matched.includes(def.id) && wrongPair !== def.id && "bg-white border-slate-200 hover:border-slate-300"
                )}
              >
                {def.definition}
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Quiz Component
function QuizGame({ lessonId, moduleColor }: { lessonId: string; moduleColor: { bg: string; text: string; gradient: string } }) {
  const [questions, setQuestions] = useState<{ id: string; question: string; options: string[]; correctIndex: number; explanation?: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    fetch(`/api/quiz/${lessonId}`)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.questions || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [lessonId]);

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    if (selectedAnswer === questions[currentIndex].correctIndex) {
      setScore(prev => prev + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCompleted(false);
  };

  if (loading) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-slate-200 rounded-xl"></div>
            <div className="h-4 bg-slate-200 rounded w-32"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (questions.length === 0) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 text-center">
          <Brain className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500">Quiz disponível em breve!</p>
        </CardContent>
      </Card>
    );
  }

  if (completed) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <Card className="border-0 shadow-lg overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${moduleColor.gradient}`} />
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${percentage >= 70 ? 'from-green-500 to-emerald-600' : 'from-amber-500 to-orange-600'} flex items-center justify-center`}>
              <Trophy className="w-10 h-10 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Quiz Concluído!</h3>
          <div className="text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-2">
            {percentage}%
          </div>
          <p className="text-slate-600 mb-6">
            Você acertou <span className="font-bold text-green-600">{score}</span> de <span className="font-bold">{questions.length}</span> questões
          </p>
          <Button onClick={handleRestart} className={`bg-gradient-to-r ${moduleColor.gradient} text-white`}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Refazer Quiz
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <Card className="border-0 shadow-lg overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${moduleColor.gradient}`} />
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className="text-sm">
            <Brain className="w-3 h-3 mr-1" />
            Quiz
          </Badge>
          <span className="text-sm text-slate-500">Questão {currentIndex + 1} de {questions.length}</span>
        </div>
        
        <Progress value={((currentIndex + 1) / questions.length) * 100} className="mb-6 h-2" />
        
        <p className="text-lg text-slate-800 mb-6">{currentQuestion.question}</p>
        
        <div className="space-y-2 mb-6">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showResult && setSelectedAnswer(index)}
              disabled={showResult}
              className={cn(
                "w-full p-4 rounded-xl text-left transition-all border-2 flex items-center gap-3",
                selectedAnswer === index && !showResult && `${moduleColor.light} ${moduleColor.border}`,
                showResult && index === currentQuestion.correctIndex && "bg-green-50 border-green-500",
                showResult && selectedAnswer === index && index !== currentQuestion.correctIndex && "bg-red-50 border-red-500",
                !showResult && selectedAnswer !== index && "border-slate-200 hover:border-slate-300"
              )}
            >
              <div className={cn(
                "w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0",
                selectedAnswer === index && !showResult && `bg-gradient-to-br ${moduleColor.gradient} text-white`,
                showResult && index === currentQuestion.correctIndex && "bg-green-500 text-white",
                showResult && selectedAnswer === index && index !== currentQuestion.correctIndex && "bg-red-500 text-white",
                !showResult && selectedAnswer !== index && "bg-slate-100 text-slate-600"
              )}>
                {String.fromCharCode(65 + index)}
              </div>
              <span className="text-slate-700">{option}</span>
            </button>
          ))}
        </div>
        
        {showResult && currentQuestion.explanation && (
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 mb-4">
            <p className="text-sm text-slate-600">
              <strong className="text-slate-800">💡 Explicação:</strong> {currentQuestion.explanation}
            </p>
          </div>
        )}
        
        <div className="flex justify-end gap-2">
          {!showResult ? (
            <Button 
              onClick={handleSubmit} 
              disabled={selectedAnswer === null}
              className={`bg-gradient-to-r ${moduleColor.gradient} text-white`}
            >
              Confirmar
            </Button>
          ) : (
            <Button onClick={handleNext} className={`bg-gradient-to-r ${moduleColor.gradient} text-white`}>
              {currentIndex < questions.length - 1 ? 'Próxima' : 'Ver Resultado'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Main Lesson Page Component
export default function LessonPageClient({ lesson, prevLesson, nextLesson }: LessonPageClientProps) {
  const router = useRouter();
  const colors = getColors(lesson.module.color);
  const iconName = getIconName(lesson.module.icon);
  const [activeTab, setActiveTab] = useState<'content' | 'story' | 'flashcards' | 'timeline' | 'match' | 'quiz'>('content');
  const [isCompleted, setIsCompleted] = useState(lesson.isCompleted);

  const handleMarkComplete = () => {
    try {
      markLessonComplete(lesson.id);
      setIsCompleted(true);
    } catch (error) {
      console.error('Error marking complete:', error);
    }
  };

  // Render content with images
  const renderContent = () => {
    const lines = lesson.content.split('\n');
    const elements: JSX.Element[] = [];
    let inSection = false;
    let sectionImage: { url: string; alt: string; caption: string } | null = null;

    lines.forEach((line, index) => {
      // Check for keywords to add images
      const lowerLine = line.toLowerCase();
      for (const [keyword, imageData] of Object.entries(contentImages)) {
        if (lowerLine.includes(keyword) && !sectionImage) {
          sectionImage = imageData;
          break;
        }
      }

      if (line.startsWith('## ')) {
        // Add image before new section if we have one
        if (sectionImage) {
          elements.push(
            <div key={`img-${index}`} className="my-8 rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src={sectionImage.url}
              alt={sectionImage.alt}
              width={800}
              height={400}
              className="w-full h-64 object-cover"
              loading="lazy"
              decoding="async"
            />
              <div className="p-4 bg-slate-50 border-t">
                <p className="text-sm text-slate-600 text-center italic">{sectionImage.caption}</p>
              </div>
            </div>
          );
          sectionImage = null;
        }
        
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-slate-800 mt-10 mb-4 flex items-center gap-3">
            <span className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
              <Sparkles className="w-5 h-5 text-white" />
            </span>
            {line.slice(3)}
          </h2>
        );
        inSection = true;
        return;
      }

      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-slate-700 mt-6 mb-3">
            {line.slice(4)}
          </h3>
        );
        return;
      }

      if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={index} className="my-6 p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-l-4 border-amber-400">
            <p className="text-slate-700 italic flex items-start gap-2">
              <Quote className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              {line.slice(2)}
            </p>
          </blockquote>
        );
        return;
      }

      if (line.startsWith('- ')) {
        elements.push(
          <li key={index} className="text-slate-700 ml-4 mb-2 flex items-start gap-2">
            <span className={`w-2 h-2 ${colors.bg} rounded-full mt-2 flex-shrink-0`}></span>
            {line.slice(2)}
          </li>
        );
        return;
      }

      if (line.trim() !== '') {
        elements.push(
          <p key={index} className="text-slate-700 leading-relaxed mb-4 text-lg">
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-xl shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900">{lesson.module.title}</h1>
                <p className="text-xs text-slate-500">Módulo {lesson.module.id.slice(-1)}</p>
              </div>
            </Link>
            
            <div className="flex items-center gap-3">
              {isCompleted && (
                <Badge className="bg-green-100 text-green-700 border border-green-200">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Concluída
                </Badge>
              )}
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <Home className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-10`} />
        <div className="container mx-auto px-4 py-12 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-xl`}>
                <IconRenderer name={iconName} className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{lesson.title}</h1>
                <div className="flex items-center gap-4 mt-2 text-slate-600">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {lesson.duration} min
                  </span>
                  <ChevronRight className="w-4 h-4" />
                  <span>{lesson.module.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b bg-white sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
              {[
                { id: 'content', label: 'Conteúdo', icon: BookOpen },
                { id: 'story', label: 'História', icon: Feather },
                { id: 'flashcards', label: 'Flashcards', icon: Zap },
                { id: 'timeline', label: 'Linha do Tempo', icon: Clock3 },
                { id: 'match', label: 'Associe', icon: LayoutGrid },
                { id: 'quiz', label: 'Quiz', icon: Brain },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
                    activeTab === tab.id 
                      ? `bg-gradient-to-r ${colors.gradient} text-white shadow`
                      : "text-slate-600 hover:bg-slate-100"
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-4xl mx-auto">
          {activeTab === 'content' && (
            <div className="space-y-6">
              {/* Audio Player */}
              <AudioPlayer 
                lessonId={lesson.id} 
                title={lesson.title} 
                moduleColor={colors} 
              />
              
              {/* Content Card */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${colors.gradient}`} />
                <CardContent className="p-6 md:p-10">
                  <div className="prose prose-slate max-w-none">
                    {renderContent()}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'story' && (
            <StorySection lessonId={lesson.id} moduleColor={colors} />
          )}

          {activeTab === 'flashcards' && (
            <FlashcardGame lessonId={lesson.id} moduleColor={colors} />
          )}

          {activeTab === 'timeline' && (
            <TimelineGame lessonId={lesson.id} moduleColor={colors} />
          )}

          {activeTab === 'match' && (
            <MatchPairsGame lessonId={lesson.id} moduleColor={colors} />
          )}

          {activeTab === 'quiz' && (
            <QuizGame lessonId={lesson.id} moduleColor={colors} />
          )}
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="border-t bg-white py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {prevLesson ? (
                <Link href={`/aula/${prevLesson.id}`} className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    <div className="text-left">
                      <div className="text-xs text-slate-500">Aula Anterior</div>
                      <div className="text-sm font-medium truncate max-w-48">{prevLesson.title}</div>
                    </div>
                  </Button>
                </Link>
              ) : (
                <div className="w-full sm:w-auto">
                  <Button variant="outline" disabled className="w-full opacity-50">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Primeira Aula
                  </Button>
                </div>
              )}

              {!isCompleted && activeTab === 'content' && (
                <Button 
                  onClick={handleMarkComplete}
                  className={`bg-gradient-to-r ${colors.gradient} text-white`}
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Marcar como Concluída
                </Button>
              )}

              {nextLesson ? (
                <Link href={`/aula/${nextLesson.id}`} className="w-full sm:w-auto">
                  <Button className={`w-full bg-gradient-to-r ${colors.gradient} text-white`}>
                    <div className="text-right">
                      <div className="text-xs text-white/80">Próxima Aula</div>
                      <div className="text-sm font-medium truncate max-w-48">{nextLesson.title}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              ) : (
                <Link href="/" className="w-full sm:w-auto">
                  <Button className={`w-full bg-gradient-to-r ${colors.gradient} text-white`}>
                    <Home className="w-4 h-4 mr-2" />
                    Voltar ao Início
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
