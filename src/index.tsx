import "bootstrap"
import "./index.scss"

import React from "react"
import {createRoot} from "react-dom/client"
import LoanSchedule from "loan-schedule.js"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTelegram} from "@fortawesome/free-brands-svg-icons"

import App from "./app"
import Storage from "./storage"
import Reducer from "./reducer"

const storage = Storage(window)
const reducer = Reducer(storage, new LoanSchedule({prodCalendar: "ru"}))

const currentYear = new Date().getFullYear()
const shareUrl = () => {
	window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}`, "blank")
}

const container = document.getElementById("app")

createRoot(container!).render(
	<div className="container" style={{marginTop: 0, paddingTop: 0}}>
		<App reducer={reducer}/>
		<div className="row mt-3">
			<div className="col text-end">
				<a href="#" target="_blank" onClick={() => shareUrl()}>
                    [Share via <FontAwesomeIcon icon={faTelegram}/>]
				</a>
				<p className="copyright">&copy; {currentYear} timmson</p>
			</div>
			<div className="col-sm-1">&nbsp;</div>
		</div>
	</div>
)
