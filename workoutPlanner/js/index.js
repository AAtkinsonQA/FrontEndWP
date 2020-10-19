'use strict';

const mon = document.getElementById("monday");
const tue = document.getElementById("tuesday");
const wed = document.getElementById("wednesday");
const thu = document.getElementById("thursday");
const fri = document.getElementById("friday");
const sat = document.getElementById("saturday");
const sun = document.getElementById("sunday");

function create(day) {
    day.addEventListener('submit', function (event) {
        event.preventDefault();
        const data = {
            name: this.name.value,
            time: this.time.value,
            reps: this.reps.value,
            day: day.id.toUpperCase(),
            done: false,
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
            getAll(day);
            this.reset();
        }).catch(error => console.error(error));
    });
}
function getAll(day) {
    fetch("http://localhost:8081/get")
        .then(response => response.json())
        .then(exercises => {
            const div = document.getElementById(day.id + "Div");
            div.innerHTML = '';
            exercises.forEach(function (exercise) {

                if (exercise.day == day.id.toUpperCase()) {

                    const card = document.createElement("div");
                    card.className = "card";
                    div.appendChild(card);

                    const cardBody = document.createElement("div");
                    cardBody.className = "card-body";
                    card.appendChild(cardBody);

                    const title = document.createElement("h5");
                    title.className = "card-title";
                    title.innerText = exercise.name;
                    title.innerText.fixed;
                    cardBody.appendChild(title);

                    const time = document.createElement("p");
                    time.className = "card-body";
                    time.innerText = "Length: " + exercise.time + " minutes";
                    time.innerText.fixed;
                    cardBody.appendChild(time);

                    const reps = document.createElement("p");
                    reps.className = "card-body reps";
                    reps.innerText = "Sets: " + exercise.reps;
                    reps.innerText.fixed;
                    cardBody.appendChild(reps);

                    const deleteButton = document.createElement("a");
                    deleteButton.className = "card-link del";
                    deleteButton.innerText = "Delete";
                    deleteButton.addEventListener("click", function () {
                        deleteExercise(exercise.id, day);
                    })
                    cardBody.appendChild(deleteButton);

                    const updateButton = document.createElement("a");
                    updateButton.className = "card-link upd";
                    updateButton.innerText = "Update";
                    updateButton.addEventListener('click', function (event) {
                        const data = {
                            name: prompt("Change exercise name", exercise.name),
                            time: prompt("Change length of exercise", exercise.time),
                            reps: prompt("Change number of sets", exercise.reps),
                            done: false,
                        }
                        updateExercise(data, exercise.id, day);
                    })
                    cardBody.appendChild(updateButton);

                    const completeButton = document.createElement("input");
                    completeButton.className = "switch";
                    completeButton.type = "checkbox";
                    completeButton.checked = exercise.done;
                    if (exercise.done) {
                        card.style = "background-color: #D5EAD1";
                        deleteButton.style = "opacity: 50%";
                        updateButton.style = "opacity: 50%";
                        reps.style = "opacity: 50%";
                        time.style = "opacity: 50%";
                        title.style = "opacity: 50%";
                    }
                    completeButton.addEventListener('change', function (event) {
                        if (this.checked) {
                            const data = {
                                name: exercise.name,
                                time: exercise.time,
                                reps: exercise.reps,
                                done: true,
                            }
                            card.style = "background-color: #D5EAD1";
                            deleteButton.style = "opacity: 50%";
                            updateButton.style = "opacity: 50%";
                            reps.style = "opacity: 50%";
                            time.style = "opacity: 50%";
                            title.style = "opacity: 50%";
                            updateExercise(data, exercise.id, day);
                        } else {
                            const data = {
                                name: exercise.name,
                                time: exercise.time,
                                reps: exercise.reps,
                                done: false,
                            }
                            card.style = "background-color: white";
                            deleteButton.style = "opacity: 100%";
                            updateButton.style = "opacity: 100%";
                            reps.style = "opacity: 100%";
                            time.style = "opacity: 100%";
                            title.style = "opacity: 100%";
                            updateExercise(data, exercise.id, day);
                        }
                    })
                    cardBody.prepend(completeButton);

                    
                }

            });
        }).catch(error => console.error(error));
}

function deleteExercise(id, day) {
    fetch("http://localhost:8081/remove/" + id, {
        method: "DELETE"
    }).then(response => {
        getAll(day);
    }).catch(error => console.error(error));
};

function updateExercise(data, id, day) {
    fetch("http://localhost:8081/update?id=" + id, { //Make request
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Accept": "application/json",
            'Content-Type': "application/json"
        }
    }).then(response => {   // Receive response
        return response.json(); // Convert response body to json
    }).then(data => { //json data from previous .then()
        getAll(day);
    }).catch(error => console.log(error));
};
//Creation input:
create(mon);
create(tue);
create(wed);
create(thu);
create(fri);
create(sat);
create(sun);
//Printing exercises:
getAll(mon);
getAll(tue);
getAll(wed);
getAll(thu);
getAll(fri);
getAll(sat);
getAll(sun);