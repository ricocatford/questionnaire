import { Question } from "../../types/question";
import Checkbox from "../form/checkbox";

export default function OptionsQuestion(question: Question) {
    const { data }: any = question;
    return (
        <>
            <p>{data.content}</p>
            {data.choices?.map((choice: string) => (
                <Checkbox key={choice} value={choice} />
            ))}
        </>
    );
}
