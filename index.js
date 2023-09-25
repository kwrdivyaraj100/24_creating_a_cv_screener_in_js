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
        image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
        name: 'Aishwarya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/54.jpg'
    },
    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkand',
        language: 'Go',
        framework: 'Go framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
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

function nextCV() {
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    image.innerHTML = `<img src = '${currentCandidate.image}'>`
}