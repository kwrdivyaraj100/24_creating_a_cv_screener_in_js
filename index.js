// Data is an array of which contains information about the candidates

const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },
    {
        name: 'Camella Capello',
        age: 24,
        city: 'US',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/95.jpg'
    },
    {
        name: 'Aishwarya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/78.jpg'
    },
    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkand',
        language: 'Go',
        framework: 'Go framework',
        image: 'https://randomuser.me/api/portraits/men/41.jpg'
    }



]

// Cv Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }

        }
    };
}

// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

const candidates = cvIterator(data);
nextCV();

function nextCV() {
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src = '${currentCandidate.image}'>`;

    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
}
else{
    alert('End of candidate applications');
    window.location.reload();
}
}