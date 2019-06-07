import { Feedback } from "./feedback";

export class Work {
    id: number;
    published: Date;
    content: string;
    feedback: Feedback[];
}
