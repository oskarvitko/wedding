import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import "animate.css";

import "font-awesome/fonts/fontawesome-webfont.eot";
import "font-awesome/fonts/fontawesome-webfont.svg";
import "font-awesome/fonts/fontawesome-webfont.ttf";
import "font-awesome/fonts/fontawesome-webfont.woff";
import "font-awesome/fonts/fontawesome-webfont.woff2";

import "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

import animation from "./components/animation";
import header from "./components/header";
import countdown from "./libs/lightcountdown_v1_2/countdown";
import burger from "./components/burger";
import titles from "./components/titles";
import approve from "./components/approve";
import text from "./components/text";
import select from "./components/select";
import "./components/users";

header();
countdown();
burger();
titles();
approve();
text();
animation();
select();
