import React from "react";
import Banner from "../../components/Home_page/banner";
import Popular from "../../components/Home_page/popular";
import Discover from "../../components/Home_page/discover";
import Selection from "../../components/Home_page/selections";
import Pink from "../../components/Home_page/pink";
import Skyblue from "../../components/Home_page/skyblue";

const Home=()=>{
    return(
        <div>
            <Banner />
            <Popular />
            <Discover /> 
            <Selection />
            <Pink />
            <Skyblue />
        </div>

    )
}
export default Home;