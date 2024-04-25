document.getElementById('diaryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('entry');
    entryDiv.innerHTML = `<h2>${location}</h2><p>${description}</p>`;
    document.getElementById('entries').appendChild(entryDiv);
    document.getElementById('location').value = ''; // Clear input
    document.getElementById('description').value = ''; // Clear textarea
});
