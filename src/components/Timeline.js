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
                    this.props.data
                        .sort((a, b) => {
                            return Date.parse(a.date.start) > Date.parse(b.date.start) ? 1 : -1
                        })
                        .map((data, idx) => (
                            this.props.filter.some(item => data.category === item && Date.parse(data.premiere) <= Date.now()) ?
                                <TimelineItem upcoming="no" data={data} key={idx} /> : ""
                        ))
                    : this.props.data
                        .sort((a, b) => {
                            return Date.parse(a.premiere) > Date.parse(b.premiere) ? 1 : -1
                        })
                        .map((data, idx) => (
                            this.props.filter.some(item => data.category === item && Date.parse(data.premiere) >= Date.now()) ?
                                <TimelineItem upcoming="yes" data={data} key={idx} /> : ""
                        ))}
            </div>
        ) : "")
    };
}
export default Timeline;