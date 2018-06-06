import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import App from "App.js";

var indexRoutes = [
    { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
    { path: "/", name: "StartPage", component: App }
];

export default indexRoutes;
