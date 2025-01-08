export function calculateYearProgress(year: number): number {
    const now = new Date();
    const start = new Date(year, 0, 1);
    const end = new Date(year + 1, 0, 1);
    const progress = (now.getTime() - start.getTime()) / (end.getTime() - start.getTime());
    return Math.min(Math.max(progress * 100, 0), 100);
  }
  
  export function getDaysLeft(year: number): number {
    const now = new Date();
    const end = new Date(year + 1, 0, 1);
    const daysLeft = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(daysLeft, 0);
  }
  
  export function getRandomColor(): string {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }
  
  