let notes = [];

// ad note
function addNote() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    if(title === "" || description === "") {
        alert("please fill allfields ");
        return;
    }


    const note = {
        id: Date.now(),
        title,
        description
    };

    notes.push(note);

    renderNotes();


    //clear input
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";

}


//show notes

function renderNotes() {
    const notesList = document.getElementById("notesList");
    notes.innerHTML = "";

    notes.forEach(note => {
        const div = document.createElement("div");
        div.classList.add("note");

        div.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.description}</p>
            <button onclick="deleteNote(${note.id})">Delete</button>
        `;

        notesList.appendChild(div);
    });
}

//delete notes
function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    renderNotes();
}

