import './DashBoard.css';
import {useStudentContext} from '../../context/StudentsContext';
import {Pie, PieChart, Tooltip, BarChart} from 'recharts';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';

const DashBoard = () => {
    const context = useStudentContext();
    const percentage = (i) => {
        return Math.round(
            (context.studentData.filter((student) => student.grade === i).length *
                100) /
            context.studentData.length
        );
    };
    const [dashBoardTotalData, setDashBoardTotalData] = useState({
        "1": null,
        "2": null,
        "3": null
    });
    const [dashBoardPercentageData, setDashBoardPercentageData] = useState(
        context.studentData.length === 0
            ? null
            : [
                {name: '1st', value: percentage(1)},
                {name: '2nd', value: percentage(2)},
                {name: '3rd', value: percentage(3)},
            ]
    );
    useEffect(() => {
        setDashBoardPercentageData(
            context.studentData.length === 0
                ? null
                : [
                    {
                        name: '1st',
                        value: percentage(1),
                    },
                    {name: '2nd', value: percentage(2)},
                    {name: '3rd', value: percentage(3)},
                ]
        );
    }, [context.studentData]); // 학생 데이터에 변화가 생기면(추가, 제거) => 대시보드의 데이터에도 바로 변화를 주도록

    useEffect(()=>{
        axios.get('/student/stat')
            .then((response)=>{
                setDashBoardTotalData(response.data.count);
            })
            .catch((error)=>{
                toast.error(error.response.data.message);
            })

        const interValid = setInterval(()=>{
            axios.get('/student/stat')
                .then((response)=>{
                    setDashBoardTotalData(response.data.count);
                })
        }, 3000)

        return  ()=> clearInterval(interValid);

    },[]);
    return (
        <div className={'DashBoard'}>
            {context.studentData.length === 0 ? <p>학생 데이터 없음.</p> : (
                <span className={'DashBoardContent'}>
                    <PieChart width={400} height={174}>
                        <Pie
                            data={dashBoardPercentageData}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                        />
                        <Tooltip/>

                    </PieChart>


                    <table className={'StudentHowMuch'}>
                        <thead>
                            <tr>
                                <th className={'StudentTableH'} scope={'cols'}>1학년</th>
                                <th className={'StudentTableH'} scope={'cols'}>2학년</th>
                                <th className={'StudentTableH'} scope={'cols'}>3학년</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={'StudentTableD'}>{dashBoardTotalData['1']}</td>
                                <td className={'StudentTableD'}>{dashBoardTotalData['2']}</td>
                                <td className={'StudentTableD'}>{dashBoardTotalData['3']}</td>
                            </tr>
                        </tbody>
                    </table>

                </span>
            )}

        </div>
    );
};

export default DashBoard;
