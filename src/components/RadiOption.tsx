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
                className="appearance-none w-5 h-5 rounded-full border-2 border-(--bg-inputs-border) cursor-pointer
                checked:bg-[url('/images/icon-radio-selected.svg')] checked:bg-center checked:bg-no-repeat checked:border-0
                focus:outline-none focus:ring-2 focus:ring-(--bg-inputs-border)"
            />
            <label htmlFor={String(value)} className="label-base cursor-pointer">
                {label}
            </label>
        </div>
    )

}
