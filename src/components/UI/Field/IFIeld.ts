import { HTMLAttributes, InputHTMLAttributes } from "react"
import { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface IField {
    placeholder?: string;
    name: string;
    label?: string;
    size?: "small" | "medium";
    type: "number" | "text" | "password";
    register: UseFormRegister<any>;
    errors: string | undefined;
    rules: RegisterOptions;
    isMulti?: number;
    svgIcon?: React.ReactNode
    className?: HTMLAttributes<HTMLDivElement>
}