"use client";

export default function GradeCounter(props) {
  let passes = props.passes;
  let violations = props.violations;
  let total = (passes.length + violations.length) * 100;
  let vWeight = total;

  violations.forEach((element) => {
    if (element.impact == "minor") {
      vWeight = vWeight - 50;
    } else if (element.impact == "moderate") {
      vWeight = vWeight - 100;
    } else if (element.impact == "serious") {
      vWeight = vWeight - 150;
    }
  });

  if (vWeight < 0) {
    vWeight = 0;
  }

  //console.log(vWeight)

  let passesPct = (vWeight / total) * 100;

  return (
    <>
      <div className="gradeCounterWrap">
        <div className="gradeCounter">
          <p>{Math.floor(passesPct)}%</p>
          <style jsx>{`
            .gradeCounter {
              width: ${passesPct};
            }
          `}</style>
        </div>
      </div>
    </>
  );
}
