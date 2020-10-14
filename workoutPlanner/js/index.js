'use strict';

const createForm = document.getElementById("create");

createForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const data = {
        name: this.name.value,
        time: this.time.value,
    }

    fetch("http://localhost:8081/create", { 
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': "application/json"
        }
    }).then(response => {  
        return response.json();
    }).then(data => { 
        getAll();
        this.reset();
    }).catch(error => console.error(error));
});

function getAll() {
    fetch("http://localhost:8081/get")
        .then(response => response.json())
        .then(exercises => {
            readDiv.innerHTML = '';
            exercises.forEach(function(exercise) {

                console.log(exercise);
                
                const card = document.createElement("div");
                card.className = "card";
                readDiv.appendChild(card);

                const cardBody = document.createElement("div");
                cardBody.className = "card-body";
                card.appendChild(cardBody);

                const title = document.createElement("h5");
                title.className = "card-title";
                title.innerText = exercise.name;
                cardBody.appendChild(title);

                const time = document.createElement("p");
                time.className = "card-body";
                time.innerText = "Length (in minutes): " + exercise.time;
                cardBody.appendChild(time);

                const deleteButton = document.createElement("a");
                deleteButton.className = "card-link";
                deleteButton.innerText = "Delete";
                deleteButton.addEventListener("click", function () {
                    deleteExercise(exercise.id);
                })
                cardBody.appendChild(deleteButton);

                const updateButton = document.createElement("a");
                updateButton.className = "card-link";
                updateButton.innerText = "Update Exercise";
                updateButton.addEventListener('click', function(event) {
                    const data = {
                        name: prompt("Change exercise name",exercise.name),
                        time: prompt("Change length of exercise",exercise.time),
                    }
                    updateExercise(data,exercise.id);
                })
                cardBody.appendChild(updateButton);

            });
        }).catch(error => console.error(error));
}

function deleteExercise(id) {
    fetch("http://localhost:8081/remove/" + id, {
        method: "DELETE"
    }).then(response => {
        getAll();
    }).catch(error => console.error(error));
};

function updateExercise(data,id) {
    fetch("http://localhost:8081/update?id="+id, { //Make request
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Accept":"application/json",
            'Content-Type': "application/json"
        }
    }).then(response => {   // Receive response
        return response.json(); // Convert response body to json
    }).then(data => { //json data from previous .then()
        getAll();
    }).catch(error => console.log(error));
};
getAll();