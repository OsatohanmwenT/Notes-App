import NotesPage from "./pages/NotesPage";
import NoteProvider from "./context/NoteContext";

export default  function App() {
    return (
        <div id="app">
            <NoteProvider>
                <NotesPage />
            </NoteProvider>
        </div>
    );
}