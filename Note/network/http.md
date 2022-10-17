# HTTP
웹에서 데이터를 주고 받기 위한 서버/클라이언트 모델을 따르는 프로토콜. TCP/IP 통신 위에서 동작하며 기본 포트는 80번

## 특징
### 무상태성 (Stateless)
각각의 요청이 독립적으로 여겨지는 특징으로, 서버는 클라이언트의 상태를 유지하지 않는다. 이를 해결하기 위해, 쿠키/세션/토큰 방식의 OAuth 및 JWT가 사용된다.

### 비-연결 지향 (Connectionless)
클라이언트가 서버에게 리소스를 요청한 후 응답을 받으면 연결을 끊어버리는 특징이다. 연결을 유지하게 되면 서버에 많은 부담을 줄 수 있기 때문.<br>
이로 인해 서버의 부담을 줄일 수 있지만, 리소스를 요청할 때마다 연결해야 하는 오버헤드 비용이 발생. 따라서 요청 헤더의 ```Connection: keep-alive``` 속성으로 지속적 연결 상태(Persistent connection)를 유지할 수 있다. HTTP 1.1 부턴 지속적 연결 상태가 기본이며 이를 해제하기 위해선 명시적으로 요청 헤더를 수정해야 한다.

## HTTP 요청 메서드
- GET : 존재하는 자원에 대한 요청
- POST : 새로운 자원을 생성
- PUT : 존재하는 자원에 대한 변경
- DELETE : 존재하는 자원에 대한 삭제
- PATCH : PUT과 비슷하지만 일부만 수정한다는 점에서 다름.


## HTTP 상태 코드
- 1xx - 요청에 대한 정보 : 요청을 받았으면 작업을 계속
- 2xx - 성공 : 200번대의 상태 코드는 대부분 성공
- 3xx - 리다이렉션 : 300번대의 상태 코드는 대부분 클라이언트가 이전 주소로 데이터를 요청하여 서버에서 새 URL로 리다이렉트를 유도하는 경우
- 4xx - 클라이언트 에러 : 400번대 상태 코드는 대부분 클라이언트의 코드가 잘못된 경우
- 5xx - 서버 에러 : 500번대 상태 코드는 서버 쪽에서 오류가 난 경우


