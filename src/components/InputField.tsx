import type React from "react"

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    hasError?: boolean;
}

export default function InputField({ id, label, hasError, ...rest }: InputFieldProps) {

    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={id}
                className="label-base"
            >
                {label}
                {label && <span className="text-text ml-1">*</span>}
            </label>
            <input
                id={id}
                {...rest}
                className={`w-full h-auto label-base py-3 px-6 border rounded-lg focus-visible:outline-none
                    ${hasError
                        ? 'border-error'
                        : 'border-(--bg-inputs-border) hover:border-text'
                    }`}
            />
        </div>
    )

}
