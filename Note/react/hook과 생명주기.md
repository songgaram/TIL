# hook
- 클래스 형식의 리액트 컴포넌트에서만 할 수 있었던 state관리나 라이프사이클등을 함수 형태 컴포넌트에서도 사용할 수 있게 만들어주는 기능

## useState
- 상태 유지 값과 그 값을 갱신하는 함수를 반환

## useEffect
- 렌더링이 완료된 후에 수행되는 hook

## useContext
- context 객체(React.createContext에서 반환된 값)을 받아 그 context의 현재 값을 반환

## useMemo
- 메모이제이션된 값을 반환

## useCallback
- 메모이제이션된 콜백을 반환, useMemo 는 그냥 함수를 실행해버리는데 반해 useCallback은 함수를 반환.

## useRef
- .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환

# 리액트 생명주기
- 리액트 컴포넌트에는 라이프사이클이 존재한다. 컴포넌트는 ‘생성(mounting) -> 업데이트(updating) -> 제거(unmounting)’ 의 생명주기를 갖는다.
- 리액트의 클래스 컴포넌트는 라이프사이클 메서드를 활용하고, 함수형 컴포넌트는 Hook을 사용한다.

## 생명주기 메소드
![리액트 생명주기](../../images/lifecycle.png)


## 생성

### constructor()
- 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
- this.props, this.state에 접근할 수 있으며 리액트 요소를 반환
- setState를 사용할 수 없으며 DOM에 접근 x

### getDerivedStateFromProps()
- props에 있는 값을 state에 동기화 시킬 때 사용하는 메서드

### render() 
- UI를 렌더링하는 메서드

### componentDidMount() 
- 컴포넌트가 웹 브라우저 상에 나타난 후 즉 첫 렌더링을 마친 후에 호출하는 메서드
- 라이브러리나 프레임워크의 **함수를 호출**하거나 **이벤트 등록, setTimeout, setInterval, setState**와 같은 ```비동기 작업```을 처리
