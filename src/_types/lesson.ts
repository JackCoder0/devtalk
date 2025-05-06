export interface Question {
  question_id: number
  lesson_id: number
  question_text: string
  type:
    | 'multiple_choice'
    | 'true_false'
    | 'fill_in_the_blank'
    | 'multiple_select'
  correct_answer: string
  options: string[]
  explanation: string
}

export interface Lesson {
  lesson_id: number
  title: string
  description: string
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
  xp_reward: number
  xp_unlock: number
  questions: Question[]
}
