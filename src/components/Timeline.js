import React from 'react';
import TimelineItem from './TimelineItem';

class Timeline extends React.Component {
    state = {
        timelineData: this.props.data
    }
    render() {
        return (this.state.timelineData.length > 0 ? (
            <div className="timeline-container">
                {this.state.timelineData.map((data, idx) => (
                    this.props.filter.some(item => data.category.tag === item) ?
                    <TimelineItem data={data}key={idx} /> : ""
                ))}
            </div>
        ) : "")
    };
}
export default Timeline;