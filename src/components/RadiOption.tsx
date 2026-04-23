
type RadiOptionProps = {
    label: string;
    value: string;
}

export default function RadiOption({ label, value } : RadiOptionProps) {

    return (
        <div className="flex items-center py-3 px-6 w-full h-auto border border-(--bg-inputs-border) gap-1.5 rounded-lg cursor-pointer">
            <input
                id={value}
                type="radio"
                name="queryType"
                className="w-5 h-5 rounded-4xl border-2 border-(--bg-inputs-border)"
            />
            <span className="label-base">{label}</span>
        </div>
    )

}
