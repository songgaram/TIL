## promise
- 비동기 작업 이후 결과 값 / 완료된 값 또는 실패한 값을 나타냄
- 프로미스가 생성된 시점에는 알려지지 않았을 수도 있는 값을 위한 **대리자**로, 비동기 연산이 종료된 이후에 결과 값과 실패 사유를 처리하기 위한 handlerd와 연결할 수 있습니다. 
- 프로미스가 반환하는 값은 **미래의 어떤 시점에 결과를 제공**하겠다는 **'약속'(프로미스)** 을 반환합니다.

## callback
### 비동기 함수
- 비동기 함수 내에 있는 비동기 적으로 동작하는 코드가 완료되지 않았다 해도 기다리지 않고 함수는 종료됨. 
- 따라서 비동기 함수 내부 코드의 처리 결과를 외부로 반환하거나 상위 스코프의 변수에 할당하면 원하는 대로 동작 x
`그렇기 때문에 비동기 함수의 결과의 처리는 비동기 함수 내부에서 수행해야함 이를 위해 콜백함수를 사용하는 것이 일반적`

### 콜백헬
- 비동기 처리의 결과를 가지고 또다시 비동기 함수를 호출해야 한다면 콜백함수 호출이 중첩되어 복잡도가 높아짐.
