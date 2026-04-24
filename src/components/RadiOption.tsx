import type React from "react"

type RadiOptionProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
}

export default function RadiOption({ label, value, ...rest }: RadiOptionProps) {

    return (
        <div className="flex items-center py-3 px-6 w-full h-auto border border-(--bg-inputs-border) gap-1.5 rounded-lg cursor-pointer">
            <input
                id={String(value)}
                type="radio"
                value={value}
                {...rest}
                className="w-5 h-5 rounded-4xl border-2 border-(--bg-inputs-border)"
            />
            <label htmlFor={String(value)} className="label-base cursor-pointer">
                {label}
            </label>
        </div>
    )

}
