import "./App.css";
import CheckQuestion from "./components/questions/check-question";
import OptionsQuestion from "./components/questions/options-question";
import data from "./data/questions.json";

function App() {
    const questionByType = (question: any) => {
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

    return <form>{data.map((question) => questionByType(question))}</form>;

    // return (
    //     <>
    //         {data.map((question) => (
    //             <>
    //                 <OptionsQuestion key={question.id} data={question} />
    //             </>
    //         ))}
    //     </>
    // );
}

export default App;
