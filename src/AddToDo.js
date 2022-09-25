import {memo} from "react"
function AddToDo({submitHandle,onChange,todo}){
    console.log('AddToDo rendered')
    return (
        <form onSubmit={submitHandle}>
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            onChange(e);
          }}
        ></input>
        <button disabled={!todo} type="submit">
          Ekle
        </button>
      </form>
    )
}
export default memo(AddToDo);