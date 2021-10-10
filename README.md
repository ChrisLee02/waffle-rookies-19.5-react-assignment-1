19.5-rookies Seminar 4 Assignment
================================

### **due: 2021.10.31(일) 23:59**

### 스펙
1. 디자인 및 기능 소폭 수정
   - 과제 스펙을 위해 디자인이 소폭 수정되었다.
     - 학생 추가 버튼이 리스트 하단으로 이동되었다.
     - 이름 필터는 원래 입력하면 리스트에 바로 반영되었었는데, 이제 "검색" 버튼을 눌러야 반영된다.
   - 따로 피그마가 업데이트되지는 않았고, [정답 사이트](https://waffle-rookies-19-5-react-assignment-1-git-v2-woohm402.vercel.app/login) 를 참고한다.
2. 이름 필터 기획 수정
   - 기존에 이름 필터만 있었는데 학년 필터도 생긴다.
   - 필터 정보가 url query에 표현되어야 한다. 이름은 `name`, 학년은 `grade`로 한다.
     - `name`: 필터 걸 이름 (`한글 2~3글자`), `grade`: 필터 걸 학년 (`1~3 숫자`)
     - 가령 이름에 `김`, 학년에 `1`을 입력하고 검색을 누르면 url이 `/students?name=김&grade=1`이 되고 학생 목록은 해당 이름과 학년으로 필터링된 목록이 뜨게 된다.
     - 당연히, 로그인된 상태에서 `/students?name=김&grade=1`에 접속하면 이름이 `김`, 학년이 `1`로 필터링된 목록이 떠야 할 것이다.
   - 엔드포인트 및 서버의 변화 없이, 프론트에서 하던 대로 해당 필터 기능을 구현한다.
     - 다만 달라진 부분은 `필터에 학년이 추가되었다는 것`과 `필터 시점이 버튼 누르고 -> url 변경되고 -> url을 기준으로 학년 필터링을 진행하도록 변경되었다는 것`이다.
3. 학생 코멘트 페이지네이션 기능
   - 조금만 건드려도 코멘트 목록이 길어지기 때문에 한 번에 모든 목록을 불러오면 데이터의 낭비가 생긴다.
   - 따라서 학생 코멘트 목록에 [페이지네이션](https://velog.io/@yjkeem0918/Pagination-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%84%A4%EC%9D%B4%EC%85%98) 이 추가된다.
   - 각 페이지별로 무조건 20개의 아이템만 전송된다. 자세한 내용은 [해당 api](https://g5imzjo8qf.execute-api.ap-northeast-2.amazonaws.com/swagger/#/%ED%95%99%EC%83%9D%20%EA%B4%80%EB%A6%AC%20API/CommentController_getComments) 를 참고한다.
   - `virtual scroll`로 구현하면 좋지만, 여의치 않다면 `infinite scroll` 방식으로 구현한다.
4. 자동 로그아웃
   - 로그인 시 발급받는 토큰의 수명이 10분으로 줄어든다.
   - 앱 마운트 시, [토큰이 살아있는지 확인하는 api](https://g5imzjo8qf.execute-api.ap-northeast-2.amazonaws.com/swagger/#/auth/AuthController_check_token) 를 이용해 토큰이 살아있다면 자동 로그인하고 토큰이 죽었으면 자동 로그아웃해야 한다.
   - 로그인한 이후 일정 시간이 지나면 자동 로그아웃이 될 필요는 없다. 물론 구현하면 좋다.
5. 학생 대시보드 데이터 추가
   - 대시보드에 담아야 하는 내용이 하나 추가된다.
   - 기존 대시보드에는 내 학생들의 학년별 비율이 있었는데, 추가된 데이터는 모든 계정에 있는 전체 학생 수이다. (예시 사이트 참고)
      - 예시 사이트처럼 글자를 이용해서 1학년 x명 2학년 x명 3학년 x명이라고 써도 되고, [barchart](https://recharts.org/en-US/api/BarChart) 를 사용해도 된다. 데이터의 표현 방식은 본인의 취향대로 구현하면 된다. 
   - 이를 위해 [전체 학생 인원 수를 받는 api](https://g5imzjo8qf.execute-api.ap-northeast-2.amazonaws.com/swagger/#/%ED%95%99%EC%83%9D%20%EA%B4%80%EB%A6%AC%20API/StudentController_getStudentStats) 가 생긴다.
   - 또한, 대시보드 화면에 있을 경우 학생 목록을 3초마다 한번씩 자동으로 불러오는 폴링 기능을 구현해야 한다.
      - ***폴링은 `react-polling`이나 `react-query` 등의 별도 라이브러리를 사용하지 말고, `setInterval`을 이용하여 직접 구현한다.***
6. 코드 마이그레이션 리팩토링 
   - axios를 이용해 비동기 처리를 하는 컴포넌트가 있을 텐데, 그 컴포넌트들 중 하나를 typescript로 마이그레이션한다.
      - 그냥 싹다 typescript로 마이그레이션해버려도 좋다.
   - css 파일들이 아무튼 있었을 텐데, 아래와 같이 마이그레이션한다.
      - 3개 이상의 파일에 `CSS Modules`를 적용한다.
        - 검색하면 나오듯이, 파일명을 `.module.css`로 변경하면 된다.
      - 3개 이상의 파일에 `scss`를 적용한다.
        - 검색하면 나오듯이, 파일명을 `.scss`로 변경하면 된다.
        - 위 항목과 같이 진행해서 `.module.scss` 세개를 만드는 것도 괜찮다.
      - 3개 이상의 파일에 `styled-components`를 적용한다.
        - 더이상 css 파일이 아닌 `.js` (혹은 `.ts`) 파일이 되겠죠?
      - 물론 `js -> ts 마이그레이션`과 동일하게, 마음에 들었다면 싹다 적용해도 된다. 위 조건만 지켜지면 된다.

### API
세미나 3 과제와 병렬적으로 가기 위해 기존 엔드포인트를 유지해야 했다.
또한 세미나 4 과제에서는 기존 엔드포인트와 호환되지 않는 부분이 있었다 (가령 댓글 api)

세미나 4 과제에서는 다음 엔드포인트를 사용한다.

```
https://g5imzjo8qf.execute-api.ap-northeast-2.amazonaws.com/v1
```

***과제 4의 결과물 기존 엔드포인트로 쏘는 api가 없도록 반드시 여러 번 점검해 주시기 바랍니다.***

### 힌트

- 1번: 2번까지 읽고, 2번이랑 한번에 진행하시는 걸 추천드립니다.
- 2번: `location` 객체의 `.search`값을 이용해서 url query를 분석해야겠네요.
분석할 때는 세미나 2에서 소개드렸던 `URLSearchParams`를 이용하면 좋습니다.
원래 이름 필터 state를 기준으로 학생 목록을 필터했다면,
이제 url query에서 분석한 값을 기준으로 학생 목록을 필터하면 되겠군요!
또한 검색 버튼을 눌렀을 때도 `URLSearchParams`를 이용하면 새로 생기는 쿼리 문자열 역시 더 편하게 만들어낼 수 있습니다. 
- 3번: 어렵습니다. 아래 참고할 만한 링크 한번 읽어보시는 걸 추천드립니다. 어려운데 또 딱히 드릴 만한 힌트가 없네요ㅠ 
- 4번: 이건 쉽게 하실 수 있을 것 같습니다 
- 5번: 비교적 어렵습니다. 라이브러리가 제한되어 있어서 더 어렵습니다. 폴링이라고 치면 잘 안 나오는데, `리액트에서 setInterval 사용하는 방법` 치시면 많이 나올 거예요.
주기적으로 뭔가 실행하도록 세팅하는 메소드입니다. 저걸 이용해서, 주기적으로 데이터 `fetch`하는 함수 실행하면 되겠죠? 폴링 자체는 5줄 정도밖에 안 나올거예요


### 참고할 만한 링크
- [virtual scroll vs infinite scroll](https://mvcp.tistory.com/entry/Javascript-FrameworkVirtual-scrolling-Infinite-scrolling)
- [react에서 infinite scroll 구현하기](https://medium.com/@_diana_lee/react-infinite-scroll-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-fbd51a8a099f)
- [axios 에서 csrf token 핸들하는 법](https://jangsus1.tistory.com/2)
- [Dan Abramov가 interval을 다루는 법](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)