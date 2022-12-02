# script 태그의 async/defer 어트리뷰트
- 자바스크립트 파싱에 의해 블로킹 현상을 해결하기 위해 생김
- HTML 파싱과 외부 자바스크립트 파일의 로드가 비동기적으로 실행됨

## async
```js
<script async src="index.js"></script>
```

- 자바스크립트의 파싱과 실행은 **로드가 끝난후** 진행되며 이때 HTML 파싱이 중단됨


## defer
```js
<script defer src="index.js"></script>
```
- 자바스크립트의 파싱과 실행은 **DOM 생성이 완료된 후** 진행된다.
