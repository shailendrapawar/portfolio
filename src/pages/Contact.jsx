import { useSelector } from "react-redux"
import InputBox from "../components/inputBox/InputBox";
import { useState } from "react";
import "./pages.css"

function Contact() {
  const { currentTheme } = useSelector(s => s.theme);


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
    console.log(emailData)
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
    <div className="w-full h-[90vh] flex justify-center items-center ">

      <section className="w-full max-w-90 h-150 flex flex-col items-start gap-5 p-5">

        <h3
          className="text-3xl"
          style={{ color: currentTheme.accent }}>Get in Touch</h3>

        <section>
          <span className="text-xl">Hello,<br></br> <span style={{ color: currentTheme.secondaryAccent }}>Feel free to connect</span></span>
        </section>

        <main className="h-auto w-full gap-3 flex flex-col">

          <InputBox
            value={emailData.name}
            type={"text"}
            onChange={handleChange}
            placeholder={"enter you name"}
            name="name"
            currentTheme={currentTheme}
          />

          <InputBox
            value={emailData.email}
            type={"email"}
            onChange={handleChange}
            placeholder={"enter you email"}
            name="email"
            currentTheme={currentTheme}
          />

          <select className="w-[100%] max-w-80 h-10  rounded-3xl text-xs p-2 outline-none"
            style={{ backgroundColor: currentTheme.secondaryAccent, color: currentTheme.textPrimary }}
            required
          >
            <option value={null}>What's this regarding</option>
            {subjectOptions?.map((option, i) => {
              return <option
                className=" text-black"
                // style={{backgroundColor:currentTheme.secondaryAccent,color:currentTheme.textPrimay}}
                key={i} value={option}>{option}</option>
            })}
          </select>



          <textarea className="h-35 w-full bg-white text-black rounded-3xl outline-none pl-5 pr-5 pt-2 pb-2  text-xs scroll-bar"
            style={{ resize: "none", boxShadow: `2px 2px 5px black` }}
            placeholder="enter your message "
            required
          >
          </textarea>

        </main>

        <button className=" self-end h-8 w-20 sm:h-10 sm:w-25 rounded-full"
        style={{backgroundColor:currentTheme.secondaryAccent,color:currentTheme.textPrimary}}
        >SEND</button>


      </section>

    </div>
  )
}
export default Contact