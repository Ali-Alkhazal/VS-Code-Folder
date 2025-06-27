
const popup = document.getElementById("popupForm");
const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

function openForm(){
    popup.style.display = "block";
}

function closeForm(){
    popup.style.display = "none";
}

form.addEventListener("submit", function(e){
     e.preventDefualt();

     const name = document.getElementById("taskName").value;
     const date = document.getElementById("taskDate").value;

     const li = document.createElement("li");
     li.innerHTML =`
        <input type="checkbox" />
        <span> ${name} - Due: ${date}<span>
         
        <button onclick = "this.parentElement.remove()">Delete</button>
        `;

        taskList.appendChild(li);
        form.reset();
        closeForm();

});
