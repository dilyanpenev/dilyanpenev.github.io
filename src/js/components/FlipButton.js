function FlipButton(props) {

    const createLabel = (top) => {
        let content = []
        props.title.split("").forEach((char, i) => {
            content.push(<div key={i} className={`${char === " " ? "space" : ""} ${top ? 'topchar' : 'bottomchar'}`} style={{ transitionDelay: `${i * 80}ms` }}>{char}</div>)
        });
        return content
    }

    return (
        <a href={props.link} target="_blank" rel="noreferrer">
            <div id="button-wrapper">
                <div id="topword" className="word">{createLabel(0)}</div>
                <div id="bottomword" className="word">{createLabel(1)}</div>
            </div>
        </a>
    );
}

export default FlipButton;