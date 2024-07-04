import Checkbox from "../form/checkbox";

export default function OptionsQuestion(question: any) {
    return (
        <>
            <p>{question.data.content}</p>
            {question.data.choices?.map((choice: string) => (
                <Checkbox key={choice} value={choice} />
            ))}
        </>
    );
}
