// type any로 설정되어 있음
function logText(text) {
  console.log(text);
  return text;
}

logText(10); // 숫자 10
logText("hi"); // 문자열 hi

function logText2<T>(text: T): T {
  console.log(text);
  return text;
}

// 텍스트의 타입을 함수를 호출할때 넘겨줌
logText2<String>("hi");
logText2<Number>(0);

// 유니온 타입의 문제점
function logText3(text: number | string) {
  console.log(text);
  return text;
}

// 변수 a의 타입은 number | string 이라는 단점
const a = logText3("hello");

// 제네릭 예제 (드롭다운)
const emails: { value: string; selected: boolean }[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

const numberOfProducts: { value: number; selected: boolean }[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// 만약에 value 타입을 number로 지정한다면 아래 이메일 드롭다운 아이템을 추가할때 에러 발생
function createDropdownItem(item: { value: string; selected: boolean }) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// 이메일 드롭다운 아이템 추가
emails.forEach((email) => {
  const item = createDropdownItem(email);
  const selectedTag = document.querySelector("#email-dropdown");
  selectedTag?.appendChild(item);
});

// 따라서 인터페이스를 다음과 같이 두개로 생성할 수 있다.
interface Email {
  value: string;
  selected: boolean;
}

interface NumberOfProducts {
  value: number;
  selected: boolean;
}

// 그렇게 하면 아래에 두개의 인터페이스를 유니언으로 작성할 수 있지만, 계속해서 인터페이스가 늘어나 코드가 비대해짐
function createDropdownItem2(item: Email | NumberOfProducts) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// 따라서 제네릭을 사용한다.
// 인터페이스에 제네릭을 선언
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const emails2: Dropdown<string>[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

const numberOfProducts2: Dropdown<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem3(item: Dropdown<string> | Dropdown<number>) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// 이메일 드롭다운 아이템 추가
emails2.forEach((email) => {
  const item = createDropdownItem3(email);
  const selectedTag = document.querySelector("#email-dropdown");
  selectedTag?.appendChild(item);
});
