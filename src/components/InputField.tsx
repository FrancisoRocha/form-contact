
type InputFieldProps = {
    id: string;
    label: string;
    type: string;
    required?: boolean;
}

export default function InputField({ id, label, type, required } : InputFieldProps) {

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
                type={type}
                id={id}
                required={required}
                className="w-full h-auto label-base py-3 px-6 border border-(--bg-inputs-border) hover:border-text rounded-lg
                            focus-visible:outline-none"
            />
        </div>
    )

}
