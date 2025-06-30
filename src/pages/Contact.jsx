import { useSelector } from "react-redux"
import InputBox from "../components/inputBox/InputBox";
import { useState } from "react";
import "./pages.css"
import toast from "react-hot-toast";
import sendEmailService from "../services/sendEmailService";
import Ball from "../components/ball/Ball";

function Contact() {
  const { currentTheme } = useSelector(s => s.theme);
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData(prev => ({
      ...prev,
      [name]: value
    }))

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (emailData.name === "" || emailData.email === "" || emailData.subject === "" || emailData.message === "") {
      toast.error("All fields are required");
      return
    }
    if (!(emailRegex.test(emailData.email.trim()))) {
      toast.error("Invalid email");
      return;
    }

    try {
      setLoading(true);
      await sendEmailService({
        name: emailData.name,
        email: emailData.email,
        message: emailData.message
      })

    } catch (err) {
      console.log(err);
      setEmailData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
      toast.error("Something went wrong")
    } finally {
      setEmailData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
      setLoading(false);
    }
  }

  const subjectOptions = [
    "Project Collaboration",
    "Freelance Inquiry",
    "Job Opportunity",
    "Resume/Portfolio Feedback",
    "General Inquiry",
    "Others"
  ]

  return (
    <div className="w-full min-h-[calc(100vh-80px)]  flex justify-center items-center p-5">

      <section className="glass-gradient w-full max-w-160 h-auto flex flex-col items-start gap-5 p-5 rounded-md">

        <h3
          className="text-3xl"
          style={{ color: currentTheme.accent }}>Get in Touch🫣</h3>

        <section>
          <span className="text-xl">Hello,<br></br> <span style={{ color: currentTheme.secondaryAccent }}>Feel free to connect</span></span>
        </section>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="h-auto w-[100%] max-w-100 sm:w-[90%] self-center gap-3 flex flex-col">

          <InputBox
            value={emailData.name}
            type={"text"}
            onChange={handleChange}
            placeholder={"enter you name"}
            name="name"
            currentTheme={currentTheme}
            loading={loading}
          />

          <InputBox
            value={emailData.email}
            type={"email"}
            onChange={handleChange}
            placeholder={"enter you email"}
            name="email"
            currentTheme={currentTheme}
            loading={loading}
          />

          <select className="w-[100%] max-w-120 h-10  rounded-3xl text-xs p-2 outline-none text-white"
            style={{ backgroundColor: currentTheme.secondaryAccent, color: currentTheme.textPrimary, boxShadow: `2px 2px 5px black` }}
            required
            onChange={(e) => handleChange(e)}
            value={emailData.subject}
            name="subject"
            disabled={loading}
          >
            <option value={null}>What's this regarding</option>
            {subjectOptions?.map((option, i) => {
              return <option
                className=" text-black"
                // style={{backgroundColor:currentTheme.secondaryAccent,color:currentTheme.textPrimay}}
                key={i} value={option}>{option}</option>
            })}
          </select>


          <textarea className="h-35 w-full bg-white text-black rounded-3xl outline-none pl-5 pr-5 pt-2 pb-2  text-xs scroll-bar mt-2"
            style={{ resize: "none", boxShadow: `2px 2px 5px black` }}
            placeholder="enter your message "
            required
            onChange={(e) => handleChange(e)}
            value={emailData.message}
            name="message"
            disabled={loading}
          >
          </textarea>

          {!loading && (<button className="cursor-pointer self-end h-8 w-20 sm:h-10 sm:w-25 rounded-full shadow-md active:shadow-none active:scale-95 transition-all ease-out shadow-black" type="submit"
            style={{ backgroundColor: currentTheme.secondaryAccent, color: "white" }}
          >SEND</button>)}

        </form>

      </section>

    </div>
  )
}
export default Contact