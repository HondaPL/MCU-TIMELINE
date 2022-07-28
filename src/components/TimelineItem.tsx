import Streaming from './Streaming';
import type { ItemProps } from '../types/types'

export default function TimelineItem(props: ItemProps) {

    let color = ''

    switch (props.data.category) {
        case "MOVIE": {
            color = 'rgb(1, 143, 105)'
            break
        }
        case "SERIES": {
            color = 'red'
            break
        }
        case "LIMITED SERIES": {
            color = 'purple'
            break
        }
        case "SHORT": {
            color = 'blue'
            break
        }
        case "INTERNET": {
            color = 'gray'
            break
        }
        default: {
            color = 'purple'
            break
        }
    }

    const addEventToCalendar = (name: string, time: string) => {
        if (time === "???") return
        const ics = require('ics')
        const milliseconds = Date.parse(/^\d/.test(time) ? time : "1" + time)
        const date = new Date(milliseconds)

        const event = {
            start: [date.getFullYear(), date.getMonth() + 1, date.getDate()],
            title: name,
            url: 'https://mcutimeline.herokuapp.com/',
        }

        ics.createEvent(event, (error: any, value: any) => {
            if (error) {
                console.log(error)
                return
            }
            window.open("data:text/calendar;charset=utf8," + escape(value));
        })
    };

    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag" style={{ background: color }}>
                    {color !== "purple" ? props.data.category : "LIMITED SERIES"}
                </span>
                {props.data.phase ?
                    <span className="phase" style={{ background: ['1','3','5'].includes(props.data.phase) ? "#7d7973" : "#d2b98e" }}>
                        PHASE {props.data.phase}
                    </span>
                    : ''
                }
                {props.upcoming !== "yes" ?
                    (
                        props.data.date.start.slice(-4) !== props.data.date.end.slice(-4)
                            ? <time>{props.data.date.start} - {props.data.date.end}</time>
                            : (props.data.date.start !== props.data.date.end
                                ? <time>{props.data.date.start.slice(0, -4)} - {props.data.date.end}</time>
                                : <time>{props.data.date.start}</time>
                            )
                    )
                    : <time onClick={() => addEventToCalendar(props.data.name, props.data.premiere)}>Premiere: {props.data.premiere === '3000' ? '???' : props.data.premiere}</time>}
                {props.data.imax ? <img className='imax' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/IMAX_blue_logo.svg/2560px-IMAX_blue_logo.svg.png" alt="IMAX" /> : ""}
                <p>{props.data.name}
                    {props.upcoming !== "yes" ? (<><br />
                        <time>Premiere: {props.data.premiere === '3000' ? '???' : props.data.premiere}</time> </>) : ""}
                </p>

                {props.data.streaming ? (
                    <ul>
                        {
                            props.data.streaming.disney
                                ? <Streaming link={props.data.streaming.disney} icon="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0cd82ff4-fa94-4020-9a16-f41089efc593/dd5d95n-46013979-82a8-4fae-ac31-fd4865a8d99d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGNkODJmZjQtZmE5NC00MDIwLTlhMTYtZjQxMDg5ZWZjNTkzXC9kZDVkOTVuLTQ2MDEzOTc5LTgyYTgtNGZhZS1hYzMxLWZkNDg2NWE4ZDk5ZC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.mL37S_siI4svhpddNLPe-E__VgYmMDwTea5XNYBGp0k" />
                                : ""
                        }
                        {
                            props.data.streaming.netflix
                                ? <Streaming link={props.data.streaming.netflix} icon="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png" />
                                : ""
                        }
                        {
                            props.data.streaming.yt
                                ? <Streaming link={props.data.streaming.yt} icon="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/YouTube_social_white_squircle.svg/1200px-YouTube_social_white_squircle.svg.png" />
                                : ""
                        }
                        {
                            props.data.streaming.prime
                                ? <Streaming link={props.data.streaming.prime} icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodownload.org%2Fwp-content%2Fuploads%2F2018%2F07%2Fprime-video-logo-1.png&f=1&nofb=1" />
                                : ""
                        }
                        {
                            props.data.streaming.tiktok
                                ? <Streaming link={props.data.streaming.tiktok} icon="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-kflCjdulWc4%2FXD-b18R9AdI%2FAAAAAAAAG7M%2FVygjROg5RXs7ynX_ihc_D-WlApNZmnngwCK4BGAYYCw%2Fs1600%2FIcon%252BTiktok.png&f=1&nofb=1" />
                                : ""
                        }
                    </ul>
                ) : ""}
                {props.data.note ? (
                    <div className="tooltip">Note
                        <span className="tooltiptext">{props.data.note}</span>
                    </div>
                ) : ""}
                {props.upcoming === "no" && props.data.date.start === '3000'
                    ? <div className="tooltip">Note
                        <span className="tooltiptext">CHRONOLOGY DATE NEEDS TO BE ADDED</span>
                    </div> : ""}
                {props.data.icon ? <img src={props.data.icon} alt="" className="circle" /> : <div className="circle" />}
            </div>
        </div>
    );
}