import { MouseEvent, ReactNode } from "react";

interface Props {
    children: ReactNode;
    type: "primary" | "secondary" | "circle_secondary" | "circle_primary";
    className?: string;
    name?: string;
    htmlFor?: "button" | "submit" | "reset" | undefined;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

function Button({ name, htmlFor, children, type, className, onClick, disabled = false }: Props) {
    let classType = "";
    let classDisabled = "";

    if (type === "primary") {
        classType = "bg-primary hover:bg-primary_hover active:bg-primary_active text-white text-base font-semibold px-3 py-2";
    }

    if (type === "secondary") {
        classType = "bg-secondary hover:bg-secondary_hover active:bg-secondary_active text-text text-base font-semibold px-3 py-2";
    }

    if (type === "circle_secondary") {
        classType = "bg-secondary hover:bg-secondary_hover active:bg-secondary_active text-text text-base font-semibold p-3";
    }

    if (type === "circle_primary") {
        classType = "bg-primary hover:bg-primary_hover active:bg-primary_active text-text text-base font-semibold p-4 aspect-square";
    }

    if (disabled === true) {
        classDisabled = "!cursor-not-allowed";
    }
    return (
        <button
            disabled={disabled}
            name={name}
            type={htmlFor}
            onClick={onClick}
            className={`ButtonMe ${className} ${classType} ${classDisabled} cursor-pointer transition rounded-full `}
        >
            {children}
        </button>
    );
}
export default Button;
