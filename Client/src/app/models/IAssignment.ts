export interface Assignment {
  id: number;
  title: string;
  description: string;
  dueDate: string; // Assuming dueDate is always in "YYYY-MM-DD" format
  uploadDate: string | null;
  uploaded: boolean;
  reviewed: boolean;
  expired: boolean;
  grade: string | null; // Assuming grade can be null or a number from 1 to 12
  backgroundBannerUrl: string;
}
