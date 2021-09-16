import {useContext, createContext, useState} from 'react';
import {dummyData} from '../Data/DummyData';


const studentContext = createContext();

export const ContextProvider = ({children}) => {
    const [studentData, setStudentData] = useState(dummyData); /*더미 데이터로 학생 데이터 초기화*/
    const [nowStudentData, setNowStudentData] = useState({      //현재 선택된 학생의 데이터, id 값만 임의로 부여해둠.
        id: null,
        name: null,
        grade: null,
        profileImg: null
    });

    const [search, setSearch] = useState(''); //검색창 입력 값 받아옴



    const filterStudent = (filterKeyword) => { //검색어가 들어갈 때 필터링하는 함수
        if (filterKeyword === '') { //공백이면 그냥 다 출력하도록
            return studentData;
        } else { //아니면 문자열 내부에 키워드가 포함된 애들만 필터링
            return studentData.filter(student => student.name.includes(filterKeyword));
        }
    }

    const addStudent = (newStudentData) => { // 학생을 추가하는 함수
        setStudentData([...studentData, newStudentData]);

        /* 학생 정보 담긴 객체 newStuData에 대해, setstuData([...stuData, newStuData]  */
    }
    const delStudent = () => { //학생을 제거하는 함수
        setStudentData(studentData.filter(student => student.id !== nowStudentData.id));
        setNowStudentData({ // 현재 선택된 학생 데이터는 '없다'로 설정
            id: Math.random(),
            name: null,
            grade: null,
            profileImg: null
        });
    }

    const checkValidity = (Data) => { //수정 시 변경조건 체크는 과제2에선 무쓸모
        if ( /[가-힣]{2,3}/g.test(Data.name)  && ['1','2','3'].includes(Data.grade) ) { //2~3글자, 한글, 학년조건 체크
            const tmp = studentData.filter(student => student.grade === Data.grade);
            const tmp2 = tmp.filter(student => student.name === Data.name); //학년, 이름으로 필터링
            if (tmp2.length===0) {
                modifyStudent(Data.id, Data); //학생 원본 데이터 수정
            } else {
                window.alert('한 학년에 동명이인이 있습니다.');
            }


        } else { // 수정 조건에 안맞는 경우
            window.alert('이름은 한글 2~3글자, 학년은 1,2,3 중 하나로 수정할 수 있습니다.');
        }
    }


    const modifyStudent = (id, data) => { // 학생 정보를 수정하는 함수
        setStudentData(studentData.map(student => student.id === id ? ({...student, ...data}) : student));
        // id로 동일성 검증, 같다면 속성을 덮어쓰는 식으로 수정, 나머지 경우는 그대로 유지
    }

    return (
        <studentContext.Provider value={{
            studentData,
            setStudentData,
            nowStudentData,
            setNowStudentData,
            search,
            setSearch,
            filterStudent,
            addStudent,
            delStudent,
            modifyStudent,
        }}>
            {children}
        </studentContext.Provider>
    )
};

export const useStudentContext = () => useContext(studentContext);