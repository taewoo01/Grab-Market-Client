//자식 컴포넌트 (ChildComponent.js)
//부모 컴포넌트에서 전달해주는 Prop 값은 컴포넌트 함수의 첫 번째 인자에 전부 들어갑니다.
function ChildComponent(props){ 
	const name = props.name;
	const age = props.age;
	return <h3>나는 {name}입니다. {age}살입니다.</h3>
}

export default ChildComponent;