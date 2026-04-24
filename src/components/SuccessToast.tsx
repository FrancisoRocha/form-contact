
export default function SuccessToast() {

    return (
        <div
            className="flex flex-col gap-2 bg-(--bg-toast) rounded-2xl p-4 shadow-lg"
            role="status"
            aria-live="polite"
        >
            <div className="flex items-center gap-2">
                <img
                    src="/images/icon-success-check.svg"
                    alt=""
                    aria-hidden="true"
                />
                <p
                    className="label-base text-left text-lg text-white font-bold"
                >
                    Message Sent!
                </p>
            </div>
            <p
                className="label-base text-left text-sm text-(--toast-text)"
            >
                Thanks for completing the form. We’ll be in touch soon!
            </p>
        </div>
    )

}
