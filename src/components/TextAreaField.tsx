type TextAreaFieldProps = {
    id: string;
    label: string
    required?: boolean;
}

export default function TextAreaField({ id, label, required } : TextAreaFieldProps) {

    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={id}
                className="label-base"
            >
                {label}
                {required && <span className="text-text ml-1">*</span>}
            </label>
            <textarea
                id={id}
                required={required}
                rows={4}
                className="w-full py-3 px-6 border border-(--bg-inputs-border) rounded-lg focus-visible:outline-none resize-none"
            />
        </div>
    )

}
