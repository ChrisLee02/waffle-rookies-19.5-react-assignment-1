19.5-rookies Seminar 2 Assignment
================================

### **due: 2021.09.25(토) 12:00**

## 과제 목적
- 라우팅으로 여러 페이지를 다룰 수 있다.
- Context를 이용한 클라이언트 상태관리를 할 수 있다.
- S3과 Cloudfront를 이용해 사이트를 배포할 수 있다.

## 과제 스펙
- 세미나 1 과제의 스펙에서 다음 항목이 변경 / 추가된다.
- 변경
    - 각 화면 url 의 조건이 변경 및 추가되었다.자세한 내용은 아래에 있다.
      - 메인 화면 (학생 리스트 화면): `/students`
      - 학생 상세 화면: `/student/:id`
      - 로그인 화면: `/login`
- 추가
    - *select 이용해서 구현함.
    - 배포를 해야 한다.
      - cloudfront에 배포된 url을 PR과 리드미에 첨부한다.
      - 링크: https://d2ees2s0bipi6z.cloudfront.net

## 참고
- 데이터 타입은 [dummy-db.json](dummy-db.json) 에 있는 형식을 사용하면 나중에 편하다.
