import { Question } from "../../types/question";
import Radio from "../form/radio";

export default function CheckQuestion(question: Question) {
    const { data }: any = question;
    return (
        <>
            <p>{data.content}</p>
            {data.choices?.map((choice: string) => (
                <Radio key={choice} value={choice} question={data.content} />
            ))}
        </>
    );
}
