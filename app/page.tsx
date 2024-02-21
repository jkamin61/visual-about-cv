import IntroMobile from "@/app/components/intro-mobile";
import RiveAnimation from "@/app/components/rive-animation";
import Intro from "@/app/components/intro";
import Waitlist from "@/app/components/waitlist";

export default function Home() {
    return (
        <>
            {/*This is the Mobile version of the pre visual landing page*/}
            <div className="flex flex-col justify-center items-center bg-zinc-200 md:hidden">
                <div className="container flex flex-col p-3 md:hidden">
                    <IntroMobile/>
                </div>
            </div>
            {/*This is Tablet/Desktop version of the pre visual landing page*/}
            <div className="hidden md:block">
                <Intro/>
                <RiveAnimation/>
                <Waitlist/>
            </div>
        </>
    );
}
