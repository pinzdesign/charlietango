import { useId } from "react"

export default function Violation(props) {
    const vId = props.id

    return(
    <div key={useId()} className="violation">
        <h4>{vId}</h4>
    </div>
    )
}