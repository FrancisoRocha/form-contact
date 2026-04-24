import React from 'react';

type TermsProps = React.InputHTMLAttributes<HTMLInputElement> & {
    id: string;
    label: string;
    hasError?: boolean;
}

export default function Terms({ id, label, hasError, ...rest } : TermsProps) {

    return (
        <div className="flex items-center gap-2">
            <input
                id={id}
                {...rest}
                className={`w-5 h-5 rounded border ${hasError ? 'border-error' : 'border-(--bg-inputs-border)'}`}
            />
            <label
                htmlFor={id}
                className="label-base"
            >
                {label}
                {label && <span className="text-text ml-1">*</span>}
            </label>
        </div>
    )
}
