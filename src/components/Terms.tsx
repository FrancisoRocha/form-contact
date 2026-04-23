
type TermsProps = {
    id: string;
    label: string;
    type: string;
    required?: boolean;
}

export default function Terms({ id, label, type ,required } : TermsProps) {

    return (
        <div className="flex items-center gap-2">
            <input
                id={id}
                type={type}
                className="w-5 h-5 rounded border border-(--bg-inputs-border)"
                required={required}
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
