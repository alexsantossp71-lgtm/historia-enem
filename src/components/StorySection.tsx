'use client';

import { useState, useEffect } from 'react';
import { BookOpen, MapPin, User, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface StorySectionProps {
  lessonId: string;
  moduleColor: { bg: string; text: string; gradient: string };
}

interface StoryData {
  title: string;
  witness: string;
  atmosphere: string;
  content: string;
  reflection: string;
}

export default function StorySection({ lessonId, moduleColor }: StorySectionProps) {
  const [story, setStory] = useState<StoryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/stories/${lessonId}`)
      .then(res => res.json())
      .then(data => {
        setStory(data.story);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [lessonId]);

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

  if (!story) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 text-center">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500">História disponível em breve!</p>
        </CardContent>
      </Card>
    );
  }

  // Split content into paragraphs
  const paragraphs = story.content.split('\n').filter(p => p.trim());

  return (
    <div className="space-y-6">
      {/* Story Header */}
      <Card className="border-0 shadow-lg overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${moduleColor.gradient}`} />
        <CardContent className="p-0">
          {/* Title Section */}
          <div className="p-6 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3 mb-3">
              <Badge className={`bg-gradient-to-r ${moduleColor.gradient} text-white border-0`}>
                <BookOpen className="w-3 h-3 mr-1" />
                Testemunha da História
              </Badge>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">{story.title}</h2>
            
            {/* Witness Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full ${moduleColor.bg} flex items-center justify-center`}>
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">{story.witness}</span>
              </div>
            </div>
          </div>

          {/* Atmosphere */}
          <div className="px-6 py-3 bg-slate-50 border-b border-slate-100">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-600 italic">{story.atmosphere}</p>
            </div>
          </div>

          {/* Story Content */}
          <div className="p-6">
            <div className="prose prose-slate max-w-none">
              {paragraphs.map((paragraph, index) => {
                // Check if it's dialogue (starts with —)
                if (paragraph.startsWith('—')) {
                  return (
                    <p key={index} className="text-slate-700 leading-relaxed mb-4 pl-4 border-l-2 border-amber-300">
                      {paragraph}
                    </p>
                  );
                }
                return (
                  <p key={index} className="text-slate-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Reflection */}
          <div className="mx-6 mb-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-amber-800 mb-1">Reflexão</p>
                <p className="text-amber-700">{story.reflection}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
