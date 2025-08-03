import { Document, Schema, model, models } from "mongoose";

interface Icontact extends Document {
    fullName: string;
    email: string;
    phone: string;
    message: string;
};

const contactSchema = new Schema<Icontact>({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);

const ContactModel = models.ContactForm || model<Icontact>("ContactForm", contactSchema);

export { ContactModel };
