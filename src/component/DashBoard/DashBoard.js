import "./DashBoard.css";
import { useStudentContext } from "../../context/StudentsContext";
import { Pie, PieChart, Tooltip } from "recharts";
import { useState, useEffect } from "react";

const DashBoard = () => {
  //다음 기회에
  const context = useStudentContext();

  const percentage = (i) => {
    return Math.round(
      (context.studentData.filter((student) => student.grade === i).length *
        100) /
        context.studentData.length
    );
  };
  const [dashBoardData, setDashBoardData] = useState(
    context.studentData.length === 0
      ? null
      : [
          {
            name: "1st",
            value: percentage(1),
          },
          { name: "2nd", value: percentage(2) },
          { name: "3rd", value: percentage(3) },
        ]
  );
  useEffect(() => {
    setDashBoardData(
      context.studentData.length === 0
        ? null
        : [
            {
              name: "1st",
              value: percentage(1),
            },
            { name: "2nd", value: percentage(2) },
            { name: "3rd", value: percentage(3) },
          ]
    );
  }, [context.studentData]); // 학생 데이터에 변화가 생기면(추가, 제거) => 대시보드의 데이터에도 바로 변화를 주도록

  return (
    <div className={"DashBoard"}>
      <div id={"DashBoard_Text"}>여기엔 자유롭게 대시보드를 만들어 주세요</div>
      {context.studentData.length === 0 ? null : (
        <PieChart width={400} height={174}>
          <Pie
            data={dashBoardData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
          />
          <Tooltip />
        </PieChart>
      )}
    </div>
  );
};

export default DashBoard;
