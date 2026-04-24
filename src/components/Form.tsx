import type { ContactFormData } from "../types"
import TextAreaField from "./TextAreaField";
import { useForm } from 'react-hook-form';
import InputField from "./InputField";
import RadiOption from "./RadiOption";
import Terms from "./Terms";
import Error from "./Error";
import { useFormStore } from "../store/store";
import { toast } from "sonner";
import SuccessToast from "./SuccessToast";


export default function Form() {

    // Acess the addContact function from the Zustand store to add new contact data
    const addContact = useFormStore((state) => state.addContact)

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>()

    // Handle form submission by calling the registerContact function with the form data
    const registerContact = (data: ContactFormData) => {

        addContact(data)

        toast.custom(() => (
            <SuccessToast />
        ))

        reset()

    }

    return (
        <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(registerContact)}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <InputField
                        id="firstName"
                        label="First Name"
                        type="text"
                        hasError={!!errors.firstName}
                        {...register('firstName', {
                            required: 'This field is required',
                        })}
                    />
                    {errors.firstName && (
                        <Error>{errors.firstName.message}</Error>
                    )}
                </div>
                <div>
                    <InputField
                        id="lastName"
                        label="Last Name"
                        type="text"
                        hasError={!!errors.lastName}
                        {...register('lastName', {
                            required: 'This field is required',
                        })}
                    />
                    {errors.lastName && (
                        <Error>{errors.lastName.message}</Error>
                    )}
                </div>
            </div>
            <div>
                <InputField
                    id="email"
                    label="Email Address"
                    type="text"
                    hasError={!!errors.email}
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Please enter a valid email address',
                        }
                    })}
                />
                {errors.email && (
                    <Error>{ errors.email.message }</Error>
                )}
            </div>
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
                        {...register('queryType', {
                            required: 'Please select a query type'
                        })}
                    />
                    <RadiOption
                        label="Support Request"
                        value="supportRequest"
                        {...register('queryType', {
                            required: 'Please select a query type'
                        })}
                    />
                </div>
                    {errors.queryType && (
                        <Error>{ errors.queryType.message }</Error>
                    )}
            </div>
            <div>
                <TextAreaField
                    id="message"
                    label="Message"
                    hasError={!!errors.message}
                    {...register('message', {
                        required: 'This field is required'
                    })}
                />
                {errors.message && (
                    <Error>{ errors.message.message }</Error>
                )}
            </div>
            <div>
                <Terms
                    id="terms"
                    type="checkbox"
                    hasError={!!errors.termsAccepted}
                    label="I consent to being contacted by the team"
                    {...register('termsAccepted', {
                        required: 'To submit this form, please consent to being contacted'
                    })}
                />
                {errors.termsAccepted && (
                    <Error>{ errors.termsAccepted.message }</Error>
                )}
            </div>
            <button
                className="w-full h-auto cursor-pointer rounded-lg flex items-center justify-center border-none
                bg-(--bg-button) text-white label-base text-sm py-3 px-6 hover:bg-text
                transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-(--bg-inputs-border)"
            >
                Submit
            </button>
        </form>
    )

}
