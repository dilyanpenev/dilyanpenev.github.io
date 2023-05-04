function TagList(props) {

    return (
        <div className="tagbox-list">
            {props.tags.map(tag => {
                return TagBox({
                    tagtext: tag,
                })
            })}
        </div>
    );
}

function TagBox(props) {
    return (
        <div className='tagbox'>
            <h5>{props.tagtext}</h5>
        </div>
    );
}

export default TagList;