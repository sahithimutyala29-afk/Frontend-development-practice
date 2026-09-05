let noteInput = document.getElementById("noteInput");
let addBtn = document.getElementById("addBtn");
let notesContainer = document.getElementById("notesContainer");
displayNotes();
addBtn.addEventListener("click", function () {
    let noteText = noteInput.value.trim();
    if (noteText === "") {
        alert("Please write a note!");
        return;
    }
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    displayNotes();
});
function displayNotes() {
    notesContainer.innerHTML = "";
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(function (note, index) {
        let noteDiv = document.createElement("div");
        noteDiv.className = "note";
        noteDiv.innerHTML = `
            <p>${note}</p>
            <button class="deleteBtn" onclick="deleteNote(${index})">
                Delete
            </button>
        `;
        notesContainer.appendChild(noteDiv);
    });
}
function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}