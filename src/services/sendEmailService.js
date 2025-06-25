import emailjs from "emailjs-com"
import toast from "react-hot-toast";

const sendEmailService = async (data) => {

  const { name, email, message } = data;

  const isSent = emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    {
      name,
      email,
      message
    },
    import.meta.env.VITE_EMAIL_PUBLIC_KEY
  )

  toast.promise(
    isSent, {
    success: "Email Sent!",
    error: "Some error while sending",
    loading: "Sending mail..."
  }
  )

  try {
    await isSent;
    return true
  } catch {
    return false;
  }
};

export default sendEmailService;
