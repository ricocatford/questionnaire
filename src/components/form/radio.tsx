import { useState } from "react";

export default function Radio({
    value,
    question,
}: {
    value: string;
    question: any;
}) {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <>
            <label htmlFor={value}>
                <input
                    type="radio"
                    id={value}
                    name={question}
                    checked={checked}
                    onChange={handleChange}
                />
                {value}
            </label>
        </>
    );
}
