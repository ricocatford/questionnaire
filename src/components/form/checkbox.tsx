import { useState } from "react";

export default function Checkbox({ value }: { value: any }) {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <form>
            <label htmlFor={value}>
                <input
                    type="checkbox"
                    id={value}
                    name={value}
                    checked={checked}
                    onChange={handleChange}
                />
                {value}
            </label>
        </form>
    );
}
