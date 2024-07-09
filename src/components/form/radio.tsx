import { useState } from "react";

export default function Radio({ value }: { value: any }) {
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
                name={value}
                checked={checked}
                onChange={handleChange}
            />
            {value}
        </label>
        </>
    );
}
