import React from 'react';

class TimelineItem extends React.Component {
    state = {
        data: this.props.data,
    }

    componentDidMount() {
        if (this.state.data.category === "MOVIE")
            this.setState({ color: "rgb(1, 143, 105)" });
        if (this.state.data.category === "SERIES")
            this.setState({ color: "red" });
        if (this.state.data.category === "LIMITED SERIES")
            this.setState({ color: "purple" });
        if (this.state.data.category === "SHORT")
            this.setState({ color: "blue" });
        if (this.state.data.category === "INTERNET")
            this.setState({ color: "gray" });
    }

    addEventToCalendar = (name, time) => {
        if(time === "???") return
        const ics = require('ics')
        const milliseconds = Date.parse(/^\d/.test(time) ? time : "1" + time)
        const date = new Date(milliseconds)

        const event = {
            start: [date.getFullYear(), date.getMonth()+1, date.getDate()],
            title: name,
            url: 'https://mcutimeline.herokuapp.com/',
        }

        ics.createEvent(event, (error, value) => {
            if (error) {
                console.log(error)
                return
            }
            window.open( "data:text/calendar;charset=utf8," + escape(value));
        })
    };

    render() {
        return (
            <div className="timeline-item">
                <div className="timeline-item-content">
                    <span className="tag" style={{ background: this.state.color }}>
                        {this.color !== "purple" ? this.state.data.category : "LIMITED SERIES"}
                    </span>
                    {this.props.upcoming !== "yes" ?
                        (
                            this.state.data.date.start.slice(-4) !== this.state.data.date.end.slice(-4)
                                ? <time>{this.state.data.date.start} - {this.state.data.date.end}</time>
                                : (this.state.data.date.start !== this.state.data.date.end
                                    ? <time>{this.state.data.date.start.slice(0, -4)} - {this.state.data.date.end}</time>
                                    : <time>{this.state.data.date.start}</time>
                                )
                        )
                        : <time onClick={() => this.addEventToCalendar(this.state.data.name, this.state.data.premiere)}>Premiere: {this.state.data.premiere}</time>}
                    <p>{this.state.data.name}</p>
                    {this.state.data.streaming ? (
                        <ul>
                            {
                                this.state.data.streaming.disney
                                    ? <a href={this.state.data.streaming.disney} rel="noreferrer" target="_blank">
                                        <img width="40px"
                                            height="40px"
                                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0cd82ff4-fa94-4020-9a16-f41089efc593/dd5d95n-46013979-82a8-4fae-ac31-fd4865a8d99d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGNkODJmZjQtZmE5NC00MDIwLTlhMTYtZjQxMDg5ZWZjNTkzXC9kZDVkOTVuLTQ2MDEzOTc5LTgyYTgtNGZhZS1hYzMxLWZkNDg2NWE4ZDk5ZC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.mL37S_siI4svhpddNLPe-E__VgYmMDwTea5XNYBGp0k"
                                            alt="" />
                                    </a>
                                    : ""
                            }
                            {
                                this.state.data.streaming.netflix
                                    ? <a href={this.state.data.streaming.netflix} rel="noreferrer" target="_blank">
                                        <img width="40px"
                                            height="40px"
                                            src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png"
                                            alt="" />
                                    </a>
                                    : ""
                            }
                            {
                                this.state.data.streaming.yt
                                    ? <a href={this.state.data.streaming.yt} rel="noreferrer" target="_blank">
                                        <img width="40px"
                                            height="40px"
                                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaxcdn.icons8.com%2FShare%2Ficon%2FMedia_Controls%2Fyoutube_play1600.png&f=1&nofb=1"
                                            alt="" />
                                    </a>
                                    : ""
                            }
                            {
                                this.state.data.streaming.prime
                                    ? <a href={this.state.data.streaming.prime} rel="noreferrer" target="_blank">
                                        <img width="40px"
                                            height="40px"
                                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodownload.org%2Fwp-content%2Fuploads%2F2018%2F07%2Fprime-video-logo-1.png&f=1&nofb=1"
                                            alt="" />
                                    </a>
                                    : ""
                            }
                        </ul>
                    ) : ""}
                    {this.state.data.note ? (
                        <div className="tooltip">Note
                            <span className="tooltiptext">{this.state.data.note}</span>
                        </div>
                    ) : ""}
                    {this.state.data.icon ? <img src={this.state.data.icon} alt="" className="circle" /> : <div className="circle" />}
                </div>
            </div>
        );
    }
}
export default TimelineItem;