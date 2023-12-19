import { getquote } from "@/components/fetches";
import './globals.css'
import { MotionDiv } from "@/components/MotionDiv";
import Footer from "@/components/Footer";
import Link from "next/link";


const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Home = async () => {
  const quote = await getquote();
  const quotes = quote[0]
  return (
    <>
      <main className="m-2 w-full md:w-[70%] h-[70%]">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-md opacity-50 group-hover:blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="p-3 border rounded-lg absolute w-full h-full bg-black" />
          <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
            className="p-3 border rounded-lg relative bg-black">
            <h1 className="text-lg md:text-[1.5rem] lg:text-[1.75rem] xl:text-[3rem]"> 
              <span className="leading-relaxed bg-[#ff6684]">{quotes.Quote}</span>
            </h1>
            <h2 className="text-sm md:text-lg mt-2 md:mt-5 xl:text-[1.5rem] text-center ">
              - {quotes.Author}
            </h2>
          </MotionDiv>
        </div>
      </main>
        <div className="mb-5 hover:bg-[#ffffff] hover:text-black p-2 rounded-lg transition duration-500 ease-in-out">
            <Link href="https://www.quotablehub.tech">
            Click here to redirect to the API
            </Link>
        </div>
      <Footer />
    </>
  )
}

export default Home
