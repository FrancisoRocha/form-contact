import { devtools, persist } from 'zustand/middleware';
import type { ContactFormData } from "../types"
import { create } from 'zustand';

type FormState = {
    contact: ContactFormData[]
    addContact: (contact : ContactFormData) => void
}

// Create a Zustand store for managing contact form data
export const useFormStore = create<FormState>()(
    // Use the devtools and persist middleware to enable debugging and persistence of the store
    devtools(
        // Define the initial state and actions for the stoer
        persist((set) => ({
                contact: [],
                addContact: (data) => {
                    set((state) => ({
                        contact: [
                            ...state.contact,
                            data
                        ]
                    }))
                }
            }), {
                // Set the name of the storage key for the persisted state
                name: 'contact-form'
            }
        )
    )
)
