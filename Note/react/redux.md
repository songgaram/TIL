# redux
- 앱 전체 상태 관리를 위한 라이브러리 

# redux 핵심원칙
1. single source of truth: store는 단 하나이며, 모든 앱의 상태는 이곳에 보관된다.
2. immutability: 상태는 읽기전용, 변경시 무조건 새로운 객체를 생성하는 방식.
3. pure function: 상태의 변경은 어떤한 사이드 이펙트도 만들지 않아야 한다.

## action
상태의 변경을 나타내는 개념.

```js
//userAction
export const loginUser = (user) => {
    return {
        type: LOGIN_USER,
        user: user,
    };
};

export const logoutUser = () => {
    // sessionStorage 에 저장했던 JWT 토큰을 삭제함.
    sessionStorage.removeItem("userToken");
    return {
        type: LOGOUT_USER,
        user: null,
    };
};
```


> action creater: action을 생성하는 함수

## store
앱 전체의 상태를 보관 하는 곳

```js
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import ReduxThunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
```

## reducer
action을 받아 새로운 state를 반환. `(state, action) => state`의 인터페이스를 따른다.

```js
//userReducer
import { LOGIN_USER, LOGOUT_USER } from "../actions/actionTypes";

const initialstate = {
    user: null,
};

export default function userReducer(state = initialstate, action) {
    switch (action.type) {
        case LOGIN_USER:
            console.log("%c로그인 성공!", "color: #d93d1a;");
            return {
                ...state,
                user: action.user,
            };
        case LOGOUT_USER:
            console.log("%c로그아웃 성공!", "color: #d93d1a;");
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
}
```

## dispatch
action을 reducer로 보내는 함수.

## selector
특정 state 조각을 store로부터 가져오는 함수.
