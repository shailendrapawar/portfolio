const Footer = () => {
    const githubLink="https://github.com/shailendrapawar/";
    const leetcodeLink="https://leetcode.com/u/shailendrapawar/";
    const linkedinLink="https://www.linkedin.com/in/shailendra-pawar792/";

    return (
        <div className="h-50 w-full bg-black text-gray-500 flex flex-col justify-center gap-5 items-center">

            <section className="w-full max-w-100 flex justify-center items-center gap-3">
                <a target="_blank" href={githubLink}>GITHUB</a>
                <a target="_blank" href={linkedinLink}>LINKEDIN</a>
                <a target="_blank" href={leetcodeLink}>LEETCODE</a>
            </section> 

            <h3 className="text-sm">© 2025 Shailendra Pawar. All rights reserved.💀</h3>

        </div>
    )
}
export default Footer