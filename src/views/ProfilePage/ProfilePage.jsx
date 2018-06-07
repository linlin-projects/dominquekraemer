import React from "react";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";

const ProfilePage = () => (
    <div>
        <Header
            color="transparent"
            brand="Dominique Krämer"
            rightLinks={<HeaderLinks />}
        />
    </div>
);

export default ProfilePage;
