export interface Step {
  id: string;
  date: Date;
  text: string;
}

export interface Stc {
  id: string;
  name: string;
  mode: 'read' | 'edit';
  current: string;
  goal: string;
  steps: Step[];
}
