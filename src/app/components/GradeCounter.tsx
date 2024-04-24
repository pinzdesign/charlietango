'use client'

export default function GradeCounter(props) {

    let passes = props.passes
    let violations = props.violations

    let total = passes + violations

    let passesPct = (passes / total) * 100

    return (
        <>
        <div className="gradeCounterWrap">
            <div className="gradeCounter">
                <p>{passesPct}%</p>
                <style jsx>{`
                    .gradeCounter {
                    width: ${passesPct};
                    }
                `}</style>
            </div>
        </div>
        </>
    )
}