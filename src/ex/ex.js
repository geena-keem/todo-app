const array = [1, 2, 3, 4, 5];

const nextArrayBad = array; // 배열을 복사하는 것이 아니라 똑같은 배열을 가리킨다.
nextArrayBad[0] = 100;
console.log(array === nextArrayBad); // true
// 완전히 같은 배열이기 때문에 true

const nextArrayGood = [...array]; // 배열 내부의 값을 복사한다.
nextArrayGood[0] = 100;
console.log(array === nextArrayGood); // false
// 다른 배열이기 때문에 false

const object = {
  foo: 'bar',
  value: 1,
};

const nextObjectBad = object; // 객체가 복사되지 않고, 같은 객체를 가리킨다.
nextObjectBad.value = nextObjectBad.value + 1;
console.log(object === nextObjectBad); // true
// 같은 객체이므로 true

const nextObjectGood = {
  ...object, // 기존에 있던 내용을 모두 복사해서 넣는다.
  value: object.value + 1,
};
console.log(object === nextObjectGood); // false
// 다른 객체이기 때문에 false

const todos = [
  { id: 1, checked: true },
  { id: 2, checked: true },
];
const nextTodos = [...todos];

nextTodos[0].checked = false;
console.log(todos[0] === nextTodos[0]); // true
// 아직까지는 같은 객체를 가리키고 있기 때문에 true

nextTodos[0] = {
  ...nextTodos[0],
  checked: false,
};
console.log(todos[0] === nextTodos[0]); // false
// 새로운 객체를 할당해 주어 false
