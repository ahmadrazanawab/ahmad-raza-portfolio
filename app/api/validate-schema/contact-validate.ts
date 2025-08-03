
import { z } from "zod";

const contactSchema = z.object({
    fullName: z.string().trim().min(3, { message: "full name must be at least 3 characters long" }).max(50, { message: "Full name must not exceed 50 characters." }),
    email: z.string().trim().email({ message: "Please enter a valid email address." }),
    phone: z.string().trim().regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits." }),
    message: z.string().trim().min(5, { message: "message must be at least 5 characters long." }).max(100, { message: "Message must not exceed 100 characters." })
});

export { contactSchema };
export type contactInput = z.infer<typeof contactSchema>;

