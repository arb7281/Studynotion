import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HighlightText from '../components/core/Homepage/HighlightText';
import CTAButton from '../components/core/Homepage/CTAButton';
import Banner from '../assets/Images/banner.mp4'
import Codeblocks from '../components/core/Homepage/Codeblocks';
import TimelineSection from '../components/core/Homepage/TimelineSection';
import LearningLanguageSection from '../components/core/Homepage/LearningLanguageSection';
import InstructorSection from '../components/core/Homepage/InstructorSection';
console.log(Banner);

const Home = () => {
  return (
    <div  className='z-9'>
      {/* This is section 1 */}
      <div className="mx-auto relative max-w-maxContent w-11/12  text-white flex flex-col justify-between">
        {/* become an instructor button */}
        
          <div className=" mt-16 p-1 rounded-full text-richblack-200 mx-auto bg-richblack-800 w-fit" >  
          <Link to={"/signup"}>
              <div className=" flex items-center gap-1 px-3 py-2 font-medium transition-all duration-200  rounded-full">Become an instructor
              <FaArrowRight />
              </div>  
          </Link>
          </div>        
        

        {/* some intro text */}
        <div className=" bg-richblack-800 mt-7 font-semibold text-4xl text-center">
          Empower your future with
          <HighlightText text={" Coding Skills"} />
        </div>
        {/* some descriptive text */}
        <p className="mt-4 w-[70%] mx-auto text-center text-lg font-bold text-richblack-300 bg-caribbeangreen-200">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </p>
        <div className="flex mx-auto gap-7 mt-7">
          <CTAButton active={true} linkto={"/signup"} >Learn More</CTAButton>
          <CTAButton active={false} linkto={"/login"}>Book a demo</CTAButton>
        </div>

        <div className="mx-24 px-20 my-12 shadow1">
          <video muted loop autoPlay className="rounded-lg drop-shadow-2xl">
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* codeblocks */}
        <div>
          <Codeblocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} />
                with our online courses.
              </div>
            }
            subheading={`Our courses are designed and taught by industry experts 
                         who have years of experience in coding and are passionate 
                         about sharing their knowledge with you.`}
            ctaBtn1={{
              text: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctaBtn2={{ text: "Learn more", linkto: "/login", active: false }}
            codeblock={`function HighlightSomeText(highlight) {
                        if (highlight) {
                         return 'This text is highlighted!';}                     
                        return 'Nothing highlighted';
                        }
                        function HighlightMoreText(highlight) {
                        if (highlight) {
                          return 'This range is highlighted!';}
                        return 'Nothing highlighted';
                        }`}
            codeColor={"text-yellow-25"}          
          />

            <Codeblocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} />
                with our online courses.
              </div>
            }
            subheading={`Our courses are designed and taught by industry experts 
                         who have years of experience in coding and are passionate 
                         about sharing their knowledge with you.`}
            ctaBtn1={{
              text: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctaBtn2={{ text: "Learn more", linkto: "/login", active: false }}
            codeblock={`function HighlightSomeText(highlight) {
                        if (highlight) {
                         return 'This text is highlighted!';}                     
                        return 'Nothing highlighted';
                        }
                        function HighlightMoreText(highlight) {
                        if (highlight) {
                          return 'This range is highlighted!';}
                        return 'Nothing highlighted';
                        }`}
            codeColor={"text-yellow-25"}          
          />
        </div>
      </div>

      {/* This is section 2 */}
      <div className='bg-pure-greys-5 text-richblack-700'>

        <div className='homepageBg h-[310px] '>
              <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
              <div className='h-[150px] bg-brown-900'>Hello delete my css only, keep my height only</div>
              <div className='flex flex-row gap-7 text-white'>
                  <CTAButton active={true} linkto={"/signup"}>
                        <div className='flex items-center gap-3'>
                            Explore Full Catalog
                            <FaArrowRight/>
                        </div>
                  </CTAButton>
                  <CTAButton active={false} linkto={"/signup"}>
                        <div>
                            Learn More
                        </div>
                  </CTAButton>
              </div>
              </div>
              
        </div>

         <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7 bg-blue-25'>
              <div className='flex flex-row justify-between gap-5 mb-10 mt-[95px]'>
                <div className='text-4xl font-semibold w-[45%]'>
                  Get the skills you need for a
                  <HighlightText text={" Job that is in demand"}/>
                </div>
              

              <div className='flex flex-col gap-10 w-[40%] items-start'>
                <div>
                  The modern StudyNotion is dicattes its own terms. Today, to be a competitive requires more than professional skills.  
                </div>
                <CTAButton active={true} linkto={"/signup"}>
                        <div>
                          Learn More
                        </div>
                </CTAButton>
              </div>          
              </div>

              <TimelineSection/>

              <LearningLanguageSection/>
          </div>
      </div>


      {/* This is section 3 */}
      <div className='mt-16 flex flex-col items-center w-11/12 mx-auto max-w-maxContent justify-between gap-8 first-letter bg-richblack-900 text-white '>
        <InstructorSection/>
        <h2 className='text-center text-4xl font-semibold mt-10'>Review From Other Learners</h2>
      </div>
    </div>
  );
}

export default Home