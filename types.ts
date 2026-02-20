export interface Speaker {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  category?: string; // Lecture, Panel, Case Study, etc.
}

export interface SubSession {
  title: string;
  speaker: string;
  capacity?: string;
}

export interface Session {
  time: string;
  type: 'lecture' | 'case' | 'panel' | 'break' | 'event' | 'parallel';
  title: string;
  speaker?: string; // Main speaker line
  subSessions?: SubSession[]; // For parallel or multi-part sessions
  description?: string;
}

export interface ProgramDay {
  date: string;
  sessions: Session[];
}

export interface Article {
  title: string;
  link: string; // Mock link
}

export interface HeroSlide {
  title: string;
  subtitle: string;
  content: string[];
}