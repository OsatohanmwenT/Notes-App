import Trash from "../icons/Trash"
import { db } from "../appwrite/databases";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

const DeleteButton = ({ noteId }) => {
  const { setNotes } = useContext(NoteContext)
    const handleDelete = async() => {
        db.notes.delete(noteId)
        setNotes((prevState) =>
            prevState.filter((note) => note.$id !== noteId)
        );
    }

  return (
    <button onClick={handleDelete}>
      <Trash />
    </button>
  )
}

export default DeleteButton
