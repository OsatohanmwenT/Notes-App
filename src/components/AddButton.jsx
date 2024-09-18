import Plus from "../icons/Plus";
import colors from "../assets/colors.json"
import { useContext, useRef } from "react";
import { db } from "../appwrite/databases";
import { NoteContext } from "../context/NoteContext";
 
const AddButton = () => {
    const startingPos = useRef(10)
    const { setNotes } = useContext(NoteContext)

    const addNote = async () => {
        const payload = {
            position: JSON.stringify({
                x:startingPos.current,
                y:startingPos.current
            }),
            colors: JSON.stringify(colors[1]),
        };

        startingPos.current += 20

        const response = await db.notes.create(payload);
        setNotes(prev => [response, ...prev])
    }

    return (
        <button id="add-btn" onClick={addNote}>
            <Plus />
        </button>
    );
}

export default AddButton