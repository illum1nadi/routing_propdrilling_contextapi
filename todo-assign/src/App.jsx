import { useState } from 'react'
import { titleAtom, descAtom, todosAtom, filterAtom, filteredSelector } from './store/atoms/todo';
import { RecoilRoot, useSetRecoilState, useRecoilValue, selector} from 'recoil'


function App() {

  return (
    <RecoilRoot>
      <TodoInput></TodoInput>
    </RecoilRoot>
  )
}

function TodoInput() {
  
  const descChange = useSetRecoilState(descAtom);
  return (
    <div>
      <Title></Title>
      <Desc></Desc>
      <ButtonSave></ButtonSave>
      <InputFilter></InputFilter>
      <FilteredTodos></FilteredTodos>
    </div>   
  )
}

function InputFilter() {
  const setFilter = useSetRecoilState(filterAtom);
  return (
    <div>
      <input onChange={(e) => {
        setFilter(e.target.value);
      }}></input>
    </div>
  )
}

function FilteredTodos() {
  const filteredTodos = useRecoilValue(filteredSelector);
  return (
    <>
      {filteredTodos.map((value) => (
        <div>
          <h1>{value.title}</h1>
          <h2>{value.description}</h2>
        </div>
      ))}
    </>
  )
}

function Title() {
  const titleChange = useSetRecoilState(titleAtom);
  return (
    <input onChange={(e) => {
      titleChange(e.target.value);
    }}></input>
  )
}

function Desc() {
  const descChange = useSetRecoilState(descAtom);
  return (
    <input onChange={(e) => {
      descChange(e.target.value);
    }}></input>
  )
}

function ButtonSave() {
  const title = useRecoilValue(titleAtom);
  const desc = useRecoilValue(descAtom);
  const setTodos = useSetRecoilState(todosAtom)

  return(
    <button onClick = {() => {
      setTodos((prevTodos) => [
        ...prevTodos,
        { title, description: desc }
      ]);
      alert("todo saved");
    }
    }>Save</button>
  )
  
}

function DisplayTodos() {
  const todos = useRecoilValue(todosAtom);
  return (
    <>
      {todos.map((value) => (
        <div>
          <h1>{value.title}</h1>
          <h2>{value.description}</h2>
        </div>
      ))}
    </>
  )
  
}

export default App
