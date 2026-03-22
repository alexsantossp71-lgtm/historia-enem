'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getProgress } from '@/lib/local-storage';
import {
  Ship, Crown, Building2, Factory, Shield, Globe,
  ChevronRight, Clock, CheckCircle2,
  BookOpen, Target, Brain, FileQuestion, Play,
  ArrowRight, Trophy, Star, Users,
  Tent, Landmark, Castle, Sun, Lightbulb, Map, Earth,
  Menu, X, Download
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import Image from 'next/image';

// Types
interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  content: string;
  duration: number;
  order: number;
  progress: { id: string; completed: boolean }[];
  quiz: { id: string; _count?: { questions: number } } | null;
}

interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  order: number;
  lessons: Lesson[];
}

interface EnemQuestion {
  id: string;
  year: number;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface CourseClientProps {
  modules: Module[];
  totalLessons: number;
  completedLessons: number;
  overallProgress: number;
  totalDuration: number;
  totalQuizzes: number;
  enemQuestions: EnemQuestion[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Ship, Crown, Building2, Factory, Shield, Globe,
  Tent, Landmark, Castle, Sun, Lightbulb, Map, Earth,
};

const colorMap: Record<string, { bg: string; light: string; text: string; gradient: string }> = {
  amber: { bg: 'bg-amber-500', light: 'bg-amber-50', text: 'text-amber-600', gradient: 'from-amber-500 to-orange-600' },
  purple: { bg: 'bg-purple-500', light: 'bg-purple-50', text: 'text-purple-600', gradient: 'from-purple-500 to-violet-600' },
  green: { bg: 'bg-green-500', light: 'bg-green-50', text: 'text-green-600', gradient: 'from-green-500 to-emerald-600' },
  red: { bg: 'bg-red-500', light: 'bg-red-50', text: 'text-red-600', gradient: 'from-red-500 to-rose-600' },
  slate: { bg: 'bg-slate-500', light: 'bg-slate-50', text: 'text-slate-600', gradient: 'from-slate-500 to-gray-600' },
  teal: { bg: 'bg-teal-500', light: 'bg-teal-50', text: 'text-teal-600', gradient: 'from-teal-500 to-cyan-600' },
  yellow: { bg: 'bg-yellow-500', light: 'bg-yellow-50', text: 'text-yellow-600', gradient: 'from-yellow-500 to-amber-600' },
  orange: { bg: 'bg-orange-500', light: 'bg-orange-50', text: 'text-orange-600', gradient: 'from-orange-500 to-red-600' },
  emerald: { bg: 'bg-emerald-500', light: 'bg-emerald-50', text: 'text-emerald-600', gradient: 'from-emerald-500 to-teal-600' },
};

// Module images mapping
const moduleImages: Record<string, string> = {
  'Pré-História e Povos Originários': '/images/modules/pre-historia.png',
  'Civilizações Antigas': '/images/modules/civilizacoes-antigas.png',
  'Idade Média': '/images/modules/idade-media.png',
  'Idade Moderna': '/images/modules/idade-moderna.png',
  'Revoluções e Iluminismo': '/images/modules/revolucoes.png',
  'Brasil Colonial': '/images/modules/brasil-colonial.png',
  'Brasil Império': '/images/modules/brasil-imperio.png',
  'Primeira República': '/images/modules/primeira-republica.png',
  'Era Vargas': '/images/modules/era-vargas.png',
  'Ditadura Militar': '/images/modules/ditadura-militar.png',
  'Idade Contemporânea': '/images/modules/guerras-mundiais.png',
  'História da América': '/images/modules/historia-america.png',
  'História da África': '/images/modules/historia-africa.png',
};

function getIcon(iconName: string) {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />;
}

function getColors(colorName: string) {
  return colorMap[colorName] || colorMap.amber;
}

export default function CourseClient({
  modules: initialModules,
  totalLessons,
  completedLessons,
  overallProgress,
  totalDuration,
  totalQuizzes,
  enemQuestions,
}: CourseClientProps) {
  const [modules, setModules] = useState(initialModules);
  const [showEnemQuiz, setShowEnemQuiz] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Load progress from local storage
  useEffect(() => {
    const localProgress = getProgress();
    if (localProgress.length > 0) {
      setModules(prevModules => 
        prevModules.map(module => ({
          ...module,
          lessons: module.lessons.map(lesson => ({
            ...lesson,
            progress: localProgress.some(p => p.lessonId === lesson.id && p.completed)
              ? [{ id: lesson.id, completed: true }]
              : lesson.progress
          }))
        }))
      );
    }
  }, []);

  // Group ENEM questions by topic
  const topics = [...new Set(enemQuestions.map(q => q.topic))];

  const handleDownloadProject = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch('/api/download');
      if (!response.ok) throw new Error('Erro ao baixar');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'historia-enem-projeto.zip';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download error:', error);
      alert('Erro ao baixar o projeto. Tente novamente.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleStartEnemQuiz = async (topic?: string) => {
    try {
      const url = topic 
        ? `/api/enem-quiz?topic=${encodeURIComponent(topic)}`
        : '/api/enem-quiz';
      const response = await fetch(url);
      const data = await response.json();
      setQuizQuestions(data.questions || []);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setScore(0);
      setQuizCompleted(false);
      setSelectedTopic(topic || null);
      setShowEnemQuiz(true);
    } catch (error) {
      console.error('Error loading ENEM quiz:', error);
    }
  };

  const handleAnswerSelect = (index: number) => {
    if (!showResult) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctIndex) {
      setScore(prev => prev + 1);
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const closeQuizModal = () => {
    setShowEnemQuiz(false);
    setQuizQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-xl shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  História para ENEM
                </h1>
                <p className="text-xs text-slate-500">Curso Completo</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-900">{completedLessons}/{totalLessons}</p>
                  <p className="text-xs text-slate-500">aulas concluídas</p>
                </div>
                <div className="w-24">
                  <Progress value={overallProgress} className="h-2" />
                </div>
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0">
                  {overallProgress}%
                </Badge>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="sm:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          
          {/* Mobile Progress */}
          {mobileMenuOpen && (
            <div className="sm:hidden pt-3 pb-2 border-t mt-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Progresso do curso</span>
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0">
                  {overallProgress}%
                </Badge>
              </div>
              <Progress value={overallProgress} className="h-2" />
              <p className="text-xs text-slate-500 mt-1">{completedLessons} de {totalLessons} aulas concluídas</p>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10" />
        <div className="container mx-auto px-4 py-12 relative">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge variant="outline" className="mb-4 border-amber-400 text-amber-600 bg-amber-50 px-4 py-1">
              <Target className="h-3.5 w-3.5 mr-2" />
              Baseado nos temas mais cobrados no ENEM
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Domine a História para o ENEM
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Curso completo com todos os tópicos da matriz de referência do INEP/MEC
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: BookOpen, value: modules.length, label: 'Módulos', color: 'from-amber-500 to-orange-600' },
              { icon: Users, value: totalLessons, label: 'Aulas', color: 'from-blue-500 to-cyan-600' },
              { icon: Brain, value: totalQuizzes, label: 'Exercícios', color: 'from-purple-500 to-violet-600' },
              { icon: Clock, value: Math.round(totalDuration / 60), label: 'Horas', color: 'from-rose-500 to-pink-600' },
            ].map((stat, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur">
                <CardContent className="pt-6 text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ENEM Quiz Banner */}
          <Card 
            className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-amber-400 bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 overflow-hidden group"
            onClick={() => setShowEnemQuiz(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5" />
            <CardHeader className="pb-2 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-xl group-hover:scale-105 transition-transform">
                    <FileQuestion className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                      Simulado ENEM
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {enemQuestions.length} questões oficiais organizadas por tema
                    </CardDescription>
                  </div>
                </div>
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg">
                  <Play className="h-4 w-4 mr-2" />
                  Iniciar Simulado
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Modules Section */}
      <section className="container mx-auto px-4 pb-16 flex-1">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full" />
          <h3 className="text-2xl font-bold text-slate-900">Módulos do Curso</h3>
        </div>
        
        <div className="grid gap-6">
          {modules.map((module) => {
            const colors = getColors(module.color);
            const moduleLessons = module.lessons.length;
            const moduleCompleted = module.lessons.filter(l => l.progress?.some(p => p.completed)).length;
            const moduleDuration = module.lessons.reduce((acc, l) => acc + l.duration, 0);
            const progressPercent = moduleLessons > 0 ? Math.round((moduleCompleted / moduleLessons) * 100) : 0;

            return (
              <Card key={module.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                {/* Module Header with Image */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                  <Image
                    src={moduleImages[module.title] || '/images/modules/default.svg'}
                    alt={module.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <div className="flex items-end justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg`}>
                          {getIcon(module.icon)}
                        </div>
                        <div>
                          <CardTitle className="text-xl text-white font-bold drop-shadow-lg">
                            {module.title}
                          </CardTitle>
                          <div className="flex items-center gap-3 text-white/80 text-sm mt-1">
                            <span>{moduleLessons} aulas</span>
                            <span>•</span>
                            <span>{moduleDuration} min</span>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm px-3 py-1">
                        {moduleCompleted}/{moduleLessons}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-1 bg-slate-100">
                  <div 
                    className={`h-full bg-gradient-to-r ${colors.gradient} transition-all duration-500`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                {/* Module Content */}
                <CardContent className="p-4">
                  <p className="text-slate-600 text-sm mb-4">{module.description}</p>
                  
                  <div className="space-y-1">
                    {module.lessons.map((lesson) => {
                      const isLessonCompleted = lesson.progress?.some(p => p.completed);
                      const hasQuiz = lesson.quiz && (lesson.quiz._count?.questions || 0) > 0;
                      
                      return (
                        <Link 
                          key={lesson.id}
                          href={`/aula/${lesson.id}`}
                          className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200 block ${
                            isLessonCompleted 
                              ? `${colors.light} border border-${module.color}-200` 
                              : 'hover:bg-slate-50 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                              isLessonCompleted 
                                ? `bg-gradient-to-br ${colors.gradient} text-white shadow` 
                                : 'bg-slate-100 text-slate-500'
                            }`}>
                              {isLessonCompleted ? <CheckCircle2 className="h-4 w-4" /> : lesson.order}
                            </div>
                            <div>
                              <h4 className="font-medium text-slate-800 group-hover:text-slate-900">
                                {lesson.title}
                              </h4>
                              <div className="flex items-center gap-2 text-xs text-slate-500">
                                <Clock className="h-3 w-3" />
                                <span>{lesson.duration} min</span>
                                {hasQuiz && (
                                  <>
                                    <span>•</span>
                                    <Brain className="h-3 w-3" />
                                    <span>Quiz</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-amber-600" />
              <span className="font-semibold text-slate-900">História para ENEM</span>
            </div>
            <p className="text-sm text-slate-500 text-center">
              Questões oficiais do ENEM (INEP) • Conteúdo baseado na Matriz de Referência MEC
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadProject}
                disabled={isDownloading}
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                {isDownloading ? 'Baixando...' : 'Baixar Projeto'}
              </Button>
              <span className="flex items-center gap-1 text-sm text-slate-500">
                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                Curso Gratuito
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* ENEM Quiz Modal */}
      <Dialog open={showEnemQuiz} onOpenChange={() => closeQuizModal()}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="sr-only">
            <DialogTitle>Simulado ENEM</DialogTitle>
            <DialogDescription>Teste seus conhecimentos</DialogDescription>
          </DialogHeader>
          {quizCompleted ? (
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600 shadow-xl">
                  <Trophy className="h-12 w-12 text-white" />
                </div>
              </div>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold">Quiz Concluído!</DialogTitle>
              </DialogHeader>
              <div className="mt-6 space-y-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  {Math.round((score / quizQuestions.length) * 100)}%
                </div>
                <p className="text-xl text-slate-600">
                  Você acertou <span className="font-bold text-green-600">{score}</span> de{' '}
                  <span className="font-bold">{quizQuestions.length}</span> questões
                </p>
                <Button
                  onClick={closeQuizModal}
                  className="mt-6 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white"
                >
                  Continuar Estudando
                </Button>
              </div>
            </div>
          ) : quizQuestions.length === 0 ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">Simulado ENEM</DialogTitle>
              </DialogHeader>
              <p className="text-slate-600 mt-2">Escolha um tema para começar:</p>
              <div className="grid gap-2 mt-4">
                <Button
                  variant="outline"
                  onClick={() => handleStartEnemQuiz()}
                  className="justify-start h-auto py-3 px-4"
                >
                  <FileQuestion className="h-5 w-5 mr-3 text-amber-500" />
                  <div className="text-left">
                    <div className="font-medium">Todas as questões</div>
                    <div className="text-xs text-slate-500">Mix aleatório de todos os temas</div>
                  </div>
                </Button>
                {topics.map(topic => (
                  <Button
                    key={topic}
                    variant="outline"
                    onClick={() => handleStartEnemQuiz(topic)}
                    className="justify-start h-auto py-3 px-4"
                  >
                    <Target className="h-5 w-5 mr-3 text-amber-500" />
                    <div className="text-left">
                      <div className="font-medium">{topic}</div>
                      <div className="text-xs text-slate-500">
                        {enemQuestions.filter(q => q.topic === topic).length} questões
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </>
          ) : currentQuestion ? (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-sm">
                      Questão {currentQuestionIndex + 1} de {quizQuestions.length}
                    </Badge>
                    {currentQuestion.year && (
                      <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0">
                        ENEM {currentQuestion.year}
                      </Badge>
                    )}
                  </div>
                </div>
              </DialogHeader>
              
              <Progress 
                value={((currentQuestionIndex + 1) / quizQuestions.length) * 100} 
                className="my-4 h-2"
              />
              
              <div className="mt-4">
                <p className="text-slate-800 text-lg leading-relaxed mb-6">{currentQuestion.question}</p>
                
                <div className="space-y-2">
                  {currentQuestion.options.map((option: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showResult}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                        selectedAnswer === index
                          ? showResult
                            ? index === currentQuestion.correctIndex
                              ? 'border-green-500 bg-green-50 ring-2 ring-green-500/20'
                              : 'border-red-500 bg-red-50 ring-2 ring-red-500/20'
                            : 'border-amber-500 bg-amber-50 ring-2 ring-amber-500/20'
                          : showResult && index === currentQuestion.correctIndex
                            ? 'border-green-500 bg-green-50'
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${
                          selectedAnswer === index
                            ? showResult
                              ? index === currentQuestion.correctIndex
                                ? 'bg-green-500 text-white'
                                : 'bg-red-500 text-white'
                              : 'bg-amber-500 text-white'
                            : showResult && index === currentQuestion.correctIndex
                              ? 'bg-green-500 text-white'
                              : 'bg-slate-100 text-slate-600'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="text-slate-700">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
                
                {showResult && currentQuestion.explanation && (
                  <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-sm text-slate-600">
                      <strong className="text-slate-800">💡 Explicação:</strong> {currentQuestion.explanation}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="flex justify-end gap-2 mt-6 pt-4 border-t">
                {!showResult ? (
                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white"
                  >
                    Confirmar Resposta
                  </Button>
                ) : (
                  <Button
                    onClick={handleNextQuestion}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white"
                  >
                    {currentQuestionIndex < quizQuestions.length - 1 ? (
                      <>
                        Próxima Questão
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    ) : (
                      'Ver Resultado'
                    )}
                  </Button>
                )}
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-slate-600">Carregando questões...</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
