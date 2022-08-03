type Props = {
    link: string,
    icon: string
}

export default function Streaming(props: Props) {
    return (
        <a href={props.link} rel="noreferrer" target="_blank">
            <img width="40px"
                height="40px"
                src={props.icon}
                alt="" />
        </a>
    )
}