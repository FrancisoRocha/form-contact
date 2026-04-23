
export type ContactFormData = {
    firstName: string;
    lastName: string;
    email: string;
    queryType: 'GeneralEnquiry' | 'SupportRequest';
    message: string;
    termsAccepted: boolean;
}
