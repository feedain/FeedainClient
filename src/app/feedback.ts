import { UserBase } from './user-base';

export class Feedback {
    id: number;
    feedbackGiver: UserBase;
    feedbackTaker: UserBase;
    feedbackText: string;
    feedbackList: Feedback[];
}
