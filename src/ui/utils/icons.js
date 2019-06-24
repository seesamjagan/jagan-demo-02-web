import React from "react";

export const Icon = ({ icon }) => <i className={"fa fa-" + icon} aria-hidden="true" />;

export const Icons = {
    SignUp: () => <Icon icon="user-plus" />,
    SignIn: () => <Icon icon="sign-in" />,
    SignOut: () => <Icon icon="sign-out" />,
    ProfileSettings: () => <Icon icon="user-circle-o" />,

    Default: () => <Icon icon="sticky-note" />,
    Close: () => <Icon icon="times-circle" />,

    About: () => <Icon icon="user-o" />,
    Experience: () => <Icon icon="puzzle-piece" />,
    Projects: () => <Icon icon="cube" />,
    Education: () => <Icon icon="graduation-cap" />,
    Awards: () => <Icon icon="certificate" />,

    SendEmail: () => <Icon icon="paper-plane" />,
}

export default Icons;