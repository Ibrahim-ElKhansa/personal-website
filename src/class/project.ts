export default class Project {
  title: string;
  role: string;
  startTime: string;
  endTime: string;
  description: string;
  priority: number;

  constructor(
    title: string,
    role: string,
    startTime: string,
    endTime: string,
    description: string,
    priority: number
  ) {
    this.title = title;
    this.role = role;
    this.startTime = startTime;
    this.endTime = endTime;
    this.description = description;
    this.priority = priority;
  }
}