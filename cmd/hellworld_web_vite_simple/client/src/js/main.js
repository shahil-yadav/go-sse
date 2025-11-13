// Import our custom CSS
import '../scss/styles.scss'

import $ from "jquery";

const evtSource = new EventSource("/sse");

evtSource.addEventListener("error", function (e) {
    console.log("sse error")
})

evtSource.addEventListener("message", function (e) {
    const timeStr = new Date().toTimeString()
    $('.icon-list').append(`
    <li>
       ${timeStr} - ${e.data}
    </li>`)
})

evtSource.addEventListener("open", function (e) {
    console.log("sse opened")
})