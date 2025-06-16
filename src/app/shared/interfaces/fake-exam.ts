export interface ChoiceFake {
  text: string;
  is_correct: boolean;
}

export interface QuestionFake {
  text: string;
  choices: ChoiceFake[];
}

export interface ExamFake {
  id: number;
  title: string;
  duration: number; // in minutes (you can change type if needed)
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  questions: QuestionFake[];
  numberOfQuestions: number; // total number of questions
}
