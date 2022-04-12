import "./lightcountdown.scss"
import LightCountdown from "./lightcountdown.module"

/* countdown */
let dateEnd = new Date('2022-05-29T15:00:00')

export default () => new LightCountdown('.countdown-week', dateEnd, { animation: "animate__animated animate__fadeIn", animationDuration: "600ms" })