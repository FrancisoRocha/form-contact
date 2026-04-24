import type React from "react"

type TextAreaFieldProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    hasError?: boolean;
}

export default function TextAreaField({ id, label, hasError, ...rest }: TextAreaFieldProps) {

    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={id}
                className="label-base"
            >
                {label}
                {label && <span className="text-text ml-1">*</span>}
            </label>
            <textarea
                id={id}
                rows={4}
                {...rest}
                className={`w-full py-3 px-6 border rounded-lg focus-visible:outline-none resize-none text-sm label-base
                    ${hasError
                        ? 'border-error'
                        : 'border-(--bg-inputs-border) hover:border-text'
                    }`}
            />
        </div>
    )

}
