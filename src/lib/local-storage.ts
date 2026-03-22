'use client'

export interface Progress {
  lessonId: string
  completed: boolean
  completedAt: string
}

export interface EnemResult {
  id: string
  totalQuestions: number
  correctAnswers: number
  score: number
  topicsResults: string
  createdAt: string
}

const PROGRESS_KEY = 'historia_enem_progress'
const ENEM_RESULTS_KEY = 'historia_enem_results'

export function getProgress(): Progress[] {
  if (typeof window === 'undefined') return []
  
  try {
    const data = localStorage.getItem(PROGRESS_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function saveProgress(progress: Progress[]): void {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
  } catch (error) {
    console.error('Error saving progress:', error)
  }
}

export function markLessonComplete(lessonId: string): void {
  const progress = getProgress()
  const existingIndex = progress.findIndex(p => p.lessonId === lessonId)
  
  const newProgress: Progress = {
    lessonId,
    completed: true,
    completedAt: new Date().toISOString()
  }
  
  if (existingIndex >= 0) {
    progress[existingIndex] = newProgress
  } else {
    progress.push(newProgress)
  }
  
  saveProgress(progress)
}

export function isLessonComplete(lessonId: string): boolean {
  const progress = getProgress()
  return progress.some(p => p.lessonId === lessonId && p.completed)
}

export function getEnemResults(): EnemResult[] {
  if (typeof window === 'undefined') return []
  
  try {
    const data = localStorage.getItem(ENEM_RESULTS_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function saveEnemResult(result: Omit<EnemResult, 'id' | 'createdAt'>): void {
  if (typeof window === 'undefined') return
  
  try {
    const results = getEnemResults()
    const newResult: EnemResult = {
      ...result,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    }
    
    results.push(newResult)
    localStorage.setItem(ENEM_RESULTS_KEY, JSON.stringify(results))
  } catch (error) {
    console.error('Error saving ENEM result:', error)
  }
}

export function clearAllProgress(): void {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.removeItem(PROGRESS_KEY)
    localStorage.removeItem(ENEM_RESULTS_KEY)
  } catch (error) {
    console.error('Error clearing progress:', error)
  }
}
