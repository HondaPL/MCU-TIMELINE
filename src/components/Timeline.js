import React from 'react';
import TimelineItem from './TimelineItem';

class Timeline extends React.Component {
    state = {
        timelineData: this.props.data
    }
    render() {
        return (this.props.data.length > 0 ? (
            <div className="timeline-container">
                {this.props.upcoming !== "yes" ?
                    (
                        !this.props.sortByPremiere ?
                            (
                                this.props.data
                                    .sort((a, b) => {
                                        return Date.parse(/^\d/.test(a.date.start) ? a.date.start : "1" + a.date.start) > Date.parse(/^\d/.test(b.date.start) ? b.date.start : "1" + b.date.start) ? 1 : -1
                                    })
                                    .map((data, idx) => (
                                        this.props.filter.some(item => data.category.includes(item) && ((Date.parse(/^\d/.test(data.premiere) ? data.premiere : "1" + data.premiere) <= Date.now() && data.premiere !== "???") || !data.premiere)) ?
                                            <TimelineItem upcoming="no" data={data} key={idx} /> : ""
                                    ))
                            ) : this.props.data.filter(x => Date.parse(x.premiere) < Date.now())
                                .sort((a, b) => {
                                    return Date.parse(a.premiere) > Date.parse(b.premiere) ? 1 : -1
                                })
                                .map((data, idx) => (
                                    this.props.filter.some(item => data.category.includes(item) && data.premiere !== "") ?
                                    <TimelineItem upcoming="no" data={data} key={idx} /> : ""
                                ))
                    ) : this.props.data.filter(x => x.premiere === "???" || Date.parse(/^\d/.test(x.premiere) ? x.premiere : "1" + x.premiere) >= Date.now())
                        .sort((a, b) => {
                            return Date.parse(/^\d/.test(a.premiere) ? a.premiere : "1" + a.premiere) > Date.parse(/^\d/.test(b.premiere) ? b.premiere : "1" + b.premiere) || (a.premiere === "???" && b.premiere !== "???") ? 1 : -1
                        })
                        .map((data, idx) => (
                            this.props.filter.some(item => data.category.includes(item)) ?
                                <TimelineItem upcoming="yes" data={data} key={idx} /> : ""
                        ))}
            </div>
        ) : "")
    };
}
export default Timeline;