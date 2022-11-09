# 스코프란
- 식별자(변수, 함수, 클래스)가 유효한 범위.

## 식별자 결정
- 어떤 변수를 참조해야 할 것인지를 결정하는 것. 스코프란 자바스크립트 엔진이 식별자를 검색할 때 사용하는 규칙.

## 스코프의 종류
> 전역 : 코드의 가장 바깥 영역 <br>
  지역 : 함수 몸체 내부
  
## 스코프 체인 
- 스코프가 함수의 중첩에 의해 계층적으로 연결된 것. 

> 변수를 참조할 때 자바스크립트 엔진은 변수를 참조하는 스코프에서 시작하여 상위 스코프로 이동하며 변수를 검색. <br>
  따라서 하위 스코프에서 상위 스코프로 변수를 자유롭게 참조할 수 있지만 상위 스코프에서 하위 스코프에서 유효한 변수를 참조할 수 없다.
  
## 함수 레벨 스코프
지역 스코프는 코드블록이 아닌 함수에 의해서만 생성됨.
하지만 **var**로 선언된 변수는 오로지 코드 블록만을 지역 스코프로 인정함.

```js
var i = 10;

// for문에서 선언한 i는 전역 변수
var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i)
}

// 의도치 않게 i의 값이 변경되었음
console.log(i); // 5
```

> var 변수는 런타임 이전에 선언 단계와 초기화 단계가 **한번에** 진행됨. let 변수는 선언단계와 초기화 단계가 **분리되어** 진행됨. 만약 초기화 단계가 실행되기 이전에 변수에 접근하려고 하면 **참조 에러**가 발생. 따라서 let 변수는 호이스팅이 발생하지 않는 것처럼 동작함. 

## 일시적 사각지대
let 변수 스코프의 시작 지점부터 초기화 단계 시작 지점까지 변수를 참조할 수 없는 구간

## 렉시컬 스코프
- 자바스크립트는 함수를 어디서 정의했는지에 따라 상위 스코프를 결정함. 함수 정의가 실행될 때 정적으로 결정됨. 함수 정의가 실행되어 생성된 함수 객체는 상위 스코프를 기억함.