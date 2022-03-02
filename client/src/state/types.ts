import { ObjectId } from 'mongoose';

export interface Step {
  id: string;
  date: Date;
  text: string;
}

export interface Stc {
  id: string;
  name: string;
  current: string;
  goal: string;
  steps: Step[];
}

export interface Chart {
  _id: ObjectId;
  name: string;
  current: string;
  goal: string;
  steps: Step[];
}

export interface StcState {
  selectedId: string | undefined;
  mode: 'read' | 'edit';
  charts: { [key: string]: Stc };
}
