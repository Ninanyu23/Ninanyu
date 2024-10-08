/*구조 분해 할당은 구조를 분해해 할당하는 문법이다. 배열이나 객체에서 요소를 해체해 개별 변수에 그 값을 담을 때 사용한다.*/

let arr = [1,2,3];

let one = arr[0];
let two = arr[1];
let three = arr[2];

console.log(one,two,three);

/*배열을 구조 분해 할당하면, 저장된 요솟값을 변수 선언과 동시에 순서대로 할당한다. 할당할 변수의 길이가
배열의 길이보다 많아도 오류가 발생하지 않는다. 다만 배열의 길이를 넘는 변수에는 undefined가 할당된다.*/

//객체의 구조 분해 할당
/*객체도 구조 분해 할당이 가능하다. 객체를 구조 분해 할당할 때는 key를 기준으로 한다.
변수 name,age,location에는 person 객체 프로퍼티의 value가 key를 기준으롤 각각 할당된다.*/

let person = {
    name: "김덕성",
    age: 25,
    location: "경기도"
};

let {name, age, location} = person;

console.log(name,age,location);

//함수와 매개변수가 객체일 때 구조 분해 할당하기
function func({name1,age1,locaion1}){
    console.log(name1, age1, locaion1);
}

let person1={
    name1:"카리나",
    age1:25,
    locaion1:"서울"
};

func(person1);

/* 객체를 전달할 때 이 문법을 함수의 매개변수에 적용하면, 필요한 프로퍼티만 전달할 수도 있어 코드가 훨씬 더 유연해진다.
객체의 구조 분해 할당 과정에서 매개변수의 이름을 새로 바꿀 수 있다. 변수 이름 옆에 콜론(:)과 함께 새 변수명을 쓰면,
새 이름으로 값이 할당 도니다*/

//스프레드 연산자와 rest 매개변수
//스프레드 연산자
/*스프레드 연산자는 '...'기호로 표기하는데, 전개 연산자로고도 부른다. 스프레드 연산자를 이용하면 배열, 문자열,
객체 등과 같이 반복이 가능한 객체의 값을 개별 요소로 분리할 수 있다.*/

let arrA=[1,2,3];
let arrB=[...arrA,4,5,6];

console.log(arrB)

//스프레드 연산자는 함수를 호출할 때도 이용ㅎ나다.

function func (a,b,c) {
    console.log(a,b,c);
}
let arr1 = [1,2,3];
func(...arr);

//rest 매개변수
/*rest 매개변수는 나머지 매개변수라고 하며, 스프레드 연산자처럼 기호 '...'으로 표기한다.
스프레드 연산자는 객체처럼 반복 가능한 값을 개별 요소로 분리하지만, rest 매개변수는 개별 요소를 배열로 묶는다.
매개변수로 사용할 변수의 이름 앞에 ...을 붙이면 rest 매개변수가 된다.
rest 매개변수는 먼저 선언한 매개변수에 할당된 인수를 제외하고 나머지를 모두 배열에 저장한다.
따라서 반드시 매개변수에서 마지막에 선언되어야 한다. */