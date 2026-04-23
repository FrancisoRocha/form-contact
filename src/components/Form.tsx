import InputField from "./InputField";
import RadiOption from "./RadiOption";
import Terms from "./Terms";
import TextAreaField from "./TextAreaField";


export default function Form() {

    return (
        <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                    id="firstName"
                    label="First Name"
                    type="text"
                    required
                />
                <InputField
                    id="lastName"
                    label="last Name"
                    type="text"
                    required
                />
            </div>
            <InputField
                id="email"
                label="Email Address"
                type="email"
                required
            />
            <div className="flex flex-col gap-4">
                <p
                    className="label-base"
                >
                    Query Type <span className="text-text ml-1">*</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <RadiOption
                        label="General Enquiry"
                        value="generalEnquiry"
                    />
                    <RadiOption
                        label="Support Request"
                        value="generalEnquiry"
                    />
                </div>
            </div>
            <TextAreaField
                id="message"
                label="Message"
                required
            />
            <Terms
                id="terms"
                type="checkbox"
                required
                label="I consent to being contacted by the team"
            />
            <button
                className="w-full h-auto cursor-pointer rounded-lg flex items-center justify-center border-none
                bg-(--bg-button) text-white label-base text-sm py-3 px-6 hover:bg-text
                transition-all duration-300"
            >
                Submit
            </button>
        </form>
    )

}
