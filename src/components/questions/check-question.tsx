import Radio from "../form/radio";

export default function CheckQuestion(question: any) {
    return (
        <>
            <p>{question.data.content}</p>
            {question.data.choices?.map((choice: string) => (
                <Radio key={choice} value={choice} />
            ))}
        </>
    );
}
