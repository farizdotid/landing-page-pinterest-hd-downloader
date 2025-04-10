import { type FC } from "react";
import { Contact2Icon } from "lucide-react";

export const ContactButton: FC = () => {
    return (
        <a
            href={`https://github.com/farizdotid`}
            className="fixed bottom-8 right-8 bg-primary text-secondary p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
            target="_blank"
            aria-label="GitHub Profile"
        >
            <Contact2Icon className="w-6 h-6" />
        </a>
    );
};
