import Navbar from "../components/navbar";
import { useState } from "react";
import RateLimitedUI from "../components/RateLimitedUI"

const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false);

    return (
     <div className="min-h-screen">
         <Navbar/>

            {isRateLimited && <RateLimitedUI/>}
     </div>
    );
};
export default HomePage;
