"use client";

export default function GradeCounter(props: any) {
  let passes = props.passes;
  let violations = props.violations;
  let total = (passes.length + violations.length) * 100;
  let vWeight = total;

  violations.forEach((element: any) => {
    if (element.impact == "minor") {
      vWeight = vWeight - 50;
    } else if (element.impact == "moderate") {
      vWeight = vWeight - 100;
    } else if (element.impact == "serious") {
      vWeight = vWeight - 150;
    } else if (element.impact == "critical") {
      vWeight = vWeight - 200;
    }
  });

  if (vWeight < 0) {
    vWeight = 0;
  }

  //console.log(vWeight)

  let passesPct = (vWeight / total) * 100;

  let grade = "";
  let color = "green";

  if(passesPct < 30) {
    grade = "E";
    color = "darkred"
  }
  else if(passesPct > 30 && passesPct < 50) {
    grade = "D"
    color = "red"
  }
  else if(passesPct > 50 && passesPct < 70) {
    grade = "C"
    color = "orange"
  }
  else if(passesPct > 70 && passesPct < 90) {
    grade = "B"
    color = "yellowgreen"
  }
  else if(passesPct > 90 && passesPct < 100) {
    grade = "A"
    color = "green"
  }
  else if(passesPct >= 100) {
    // A+ kan kun opnåes med 100%, dvs ingen fejl
    grade = "A+"
    color = "lime"
  }

  //console.log(grade);

  return (
    <>
      <div className="grade">
        <p>{grade}</p>
        <style jsx>{`
            .grade {
              background-color: ${color};
            }
          `}</style>
      </div>
      <div className="gradeCounterWrap">
        <div className="gradeCounter">
          <p>{Math.floor(passesPct)}%</p>
          <style jsx>{`
            .gradeCounter {
              width: ${Math.floor(passesPct)}px;
            }
          `}</style>
        </div>
      </div>
    </>
  );
}
