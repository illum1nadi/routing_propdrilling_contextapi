import { atom, selector} from "recoil"

export const titleAtom = atom({
  key : "titleAtom",
  default : ""
})

export const descAtom = atom({
  key : "descAtom",
  default : ""
})

export const filterAtom = atom({
  key : "filterAtom",
  default : ""
})

export const todosAtom = atom({
  key : "todosAtom",
  default : []
})

export const filteredSelector = selector({
  key : "filteredSelector",
  get : ({get}) => {
    const todos = get(todosAtom);
    const filter = get(filterAtom);
    return todos.filter(todo => todo.description.includes(filter))
  }
})