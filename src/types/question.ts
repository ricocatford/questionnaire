export interface Question {
    id: number;
    type: string;
    prerequisite: {};
    content: string;
    note: string;
    choices: [];
    image: string;
}