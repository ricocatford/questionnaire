import "./App.css";

import { useState } from "react";

import CheckQuestion from "./components/questions/check-question";
import OptionsQuestion from "./components/questions/options-question";
import data from "./data/questions.json";
import { Question } from "./types/question";

function App() {
    // Initialize step counter state at 0.
    const [step, setStep] = useState(0);

    // Increase step counter state.
    const nextQuestion = (step: number) => {
        if (step === data.length - 1) {
            return;
        }
        setStep(step + 1);
    };

    // Decrease step counter state.
    const previousQuestion = (step: number) => {
        if (step === 0) {
            return;
        }
        setStep(step - 1);
    };

    // Select question by step.
    const selectCurrentQuestionByStep = (data: any) => {
        return data.find((question: Question) => question.id === step);
    };

    // Select question by type.
    const selectQuestion = (question: Question) => {
        switch (question.type) {
            case "Options":
                return <OptionsQuestion key={question.id} data={question} />;
            case "Check":
                return <CheckQuestion key={question.id} data={question} />;
            case "Input":
                return <h1>Bye</h1>;
            default:
                return null;
        }
    };

    // Store current question.
    const currentQuestion = selectQuestion(selectCurrentQuestionByStep(data));

    return (
        <form>
            <div>{currentQuestion}</div>
            <button type="button" onClick={() => previousQuestion(step)}>
                Prev
            </button>
            <button type="button" onClick={() => nextQuestion(step)}>
                Next
            </button>
        </form>
    );
}

export default App;
