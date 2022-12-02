# 브라우저 렌더링
1. 브라우저는 서버에게 HTML, CSS, JavaScript 리소스를 요청한다.
2. 서버로 부터 받은 HTML를 파싱하여 `DOM` 을 생성하고, CSS를 파싱하여 `CSSOM` 을 생성한다. => 이를 결합하여 **렌더트리**를 생성
3. 브라우저의 자바스크립트 엔진은 서버로부터 응답된 JavaScript를 파싱하여 syntax tree(AST)를 생성하고 이를 바이트코드로 변환하여 실행한다. 이 과정에서 DOM, CSSOM을 변경할 수 있음
4. 렌더트리를 기반으로 **레이아웃(크기와 위치)** 을 계산하고 브라우저 화면에 HTML 요소를 **페인팅**한다.

## Reflow & Repaint
- 특정 액션과 이벤트에 따라 html 요소의 위치나 크기가 변경되는 일이 발생
- 레이아웃을 다시 계산하고 
- Reflow 따라 Repaint 일어남

> *그런데 레이아웃에는 영향을 주지 X repaint만 일어나는 경우도 있음 <br>
  예) background-color, visibility
