import TimelineItem from './TimelineItem';
import type { TimeLineProps, Movie } from '../types/types'

export default function Timeline(props: TimeLineProps) {

    return (props.data.length > 0 ? (
        <div className="timeline-container">
            {props.upcoming !== "yes" ?
                (
                    !props.sortByPremiere ?
                        (
                            props.data
                                .sort((a: Movie, b: Movie) => {
                                    if (!a.date.start && a.premiere) {
                                        a.date.start = "3000"
                                    }

                                    return Date.parse(/^\d/.test(a.date.start) ? a.date.start : "1" + a.date.start) > Date.parse(/^\d/.test(b.date.start) ? b.date.start : "1" + b.date.start) ? 1 : -1
                                })
                                .map((data: Movie, idx: number) => (
                                    props.filter.some(item => data.category.includes(item) && ((Date.parse(/^\d/.test(data.premiere) ? data.premiere : "1" + data.premiere) <= Date.now() && data.premiere !== "???") || !data.premiere)) ?
                                        (<TimelineItem upcoming="no" data={data} key={idx} />) : ""
                                ))
                        ) : props.data.filter((x: Movie) => Date.parse(x.premiere) < Date.now())
                            .sort((a: Movie, b: Movie) => {
                                return Date.parse(a.premiere) > Date.parse(b.premiere) ? 1 : -1
                            })
                            .map((data: Movie, idx: number) => (
                                props.filter.some(item => data.category.includes(item) && data.premiere !== "") ?
                                    <TimelineItem upcoming="no" data={data} key={idx} /> : ""
                            ))
                ) : props.data.filter((x: Movie) => x.premiere === "???" || Date.parse(/^\d/.test(x.premiere) ? x.premiere : "1" + x.premiere) >= Date.now())
                    .sort((a: Movie, b: Movie) => {
                        return Date.parse(/^\d/.test(a.premiere) ? a.premiere : "1" + a.premiere) > Date.parse(/^\d/.test(b.premiere) ? b.premiere : "1" + b.premiere) ? 1 : -1
                    })
                    .map((data: Movie, idx: number) => (
                        props.filter.some(item => data.category.includes(item)) ?
                            <TimelineItem upcoming="yes" data={data} key={idx} /> : ""
                    ))}
        </div>
    ) : "")
}