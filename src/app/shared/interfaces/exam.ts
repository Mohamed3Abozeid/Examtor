export interface Instructor {
  id: number;
  username: string;
  first_name: string;
  second_name: string;
}

export interface Course {
  id: number;
  title: string;
}

export interface Exam {
  url: string;
  id: number;
  title: string;
  instructor: Instructor;
  start_date: string; // ISO datetime string
  end_date: string; // ISO datetime string
  course: Course;
  exam_score: number;
}

export interface ExamApiRes {
  count: number;
  next: string | null;
  previous: string | null;
  results: Exam[];
}

export interface ExamData {
  title: string;
  instructor: number;
  start_date: string;
  end_date: string;
  course: number;
  exam_score: number;
}
export interface Question {
  exam: number; // ID of the exam this question belongs to
  text: string; // The question text
}

export interface QuestionApiRes {
  id: number;
  url: string;
  exam: {
    id: number;
    title: string;
  };
  text: string;
  choices: Choice[]; // currently empty, but should be an array of Choice
}

export interface Choice {
  id: number;
  text: string;
  is_correct: boolean;
}

export interface CreateChoice {
  text: string;
  is_correct: boolean;
}

export interface ChoiceApiRes {
  id: number;
  question: {
    id: number;
    text: string;
  };
  text: string;
  is_correct: boolean;
}
