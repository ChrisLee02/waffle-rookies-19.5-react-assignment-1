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
    - 로그인 페이지가 추가된다.
      - 로그인 기능 자체는 세미나 3 과제에서 구현한다. 지금은 그냥 피그마대로 만들어 두기만 하고, 아이디 비번을 입력하든 말든 로그인 버튼을 누르면 로그인이 됐다고 치게끔 구현한다.
      - 로그인되어있지 않은데 현재 경로가 `/login` 이 아니라면, 항상 `/login` 으로 리다이렉트된다.
      - 로그인되어있는데 현재 경로가 `/login` 이라면, 항상 `/students` 로 리다이렉트된다.
    - 로그인되어 있다면 url은 자유이나, 만약 잘못된 (어디에도 맞지 않는) url을 입력했다면 `/students` 로 리다이렉트된다.
    - 배포를 해야 한다.
      - cloudfront에 배포된 url을 PR과 리드미에 첨부한다.
      - 링크: https://d2ees2s0bipi6z.cloudfront.net/index.html

## 참고
- 데이터 타입은 [dummy-db.json](dummy-db.json) 에 있는 형식을 사용하면 나중에 편하다.
