import React from "react";
import DisplayObjects from "../../components/common/DisplayObjects";

const profileObj = {
    heading: "Profile",
    personal_details: {
        name: "Mukesh Kumar",
        gender: "Male",
        dob: "03/01/1993"
    },
    Education: {
        secondary: "Vikek Sen. Sec. School",
        higher_Secondary: "Shree K.S Sen. Sec School",
        graduation: "BBD College",
        post_Graduation: "BND College"
    },
    Contact: {
        phone: "1234567890",
        address: "Plot no. 23, Dewan-Road, Dewan, Shahpura, Jaipur, Rajasthan",
        email: "mukeshkumar@gmail.com"
    },
    intrest: ["Sports", "Movies", "Coding"]
};

const Profile = () => {
    return (
        <div className="profile">
            <h1>{profileObj.heading}</h1>
            <div className="profile_container">
                <DisplayObjects dataObj={profileObj.personal_details} title="Personal Details" />
                <DisplayObjects dataObj={profileObj.Education} title="Education" />
                <DisplayObjects dataObj={profileObj.Contact} title="Contact" />
                <DisplayObjects dataObj={profileObj.intrest} title="Interests"  />
            </div>
        </div>
    );
};

export default Profile;
