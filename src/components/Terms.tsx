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
                className={`appearance-none w-5 h-5 rounded border cursor-pointer
                   checked:bg-[url('/images/icon-checkbox-check.svg')] checked:bg-center checked:bg-no-repeat checked:border-0
                   focus:outline-none focus:ring-2 focus:ring-(--bg-inputs-border)
                   ${hasError ? 'border-error' : 'border-(--bg-inputs-border)'}`}
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
