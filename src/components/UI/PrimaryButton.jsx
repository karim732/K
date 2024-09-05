
const PrimaryButton = (props) => {

    const isRoundedPill = props.border === 'pill'
    const btnStyle = {
        width: props.width || 'initial',
        fontWeight: props.fontWeight || 'bolder',
        backgroundColor: props.backgroundColor || '#1D9BF0',
        color: "white"
    }

    return <button className={`btn ${isRoundedPill && 'rounded-pill'}`} style={btnStyle}>
        {props.title}
    </button>
}

export default PrimaryButton;