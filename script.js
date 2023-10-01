// Initialize Firebase
const firebaseConfig = {
    // Your Firebase Config Here
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function addNote() {
    const noteInput = document.getElementById('noteInput');
    const note = noteInput.value;

    // Store the note in Firebase
    const newNoteRef = db.ref('notes').push();
    newNoteRef.set(note);

    // Clear the input
    noteInput.value = '';
}

function openGoogleSearch(query) {
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
}
