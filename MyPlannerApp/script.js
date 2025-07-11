
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
     e.preventDefault();

     const name = document.getElementById("taskName").value;
     const date = document.getElementById("taskDate").value;

     const li = document.createElement("li");
     li.innerHTML =`
        <input type="checkbox" />
        <span> ${name} - Due: ${date}</span>
         
        <button onclick = "this.parentElement.remove()">Delete</button>
        `;

        taskList.appendChild(li);
        form.reset();
        closeForm();

});

const wrapper = document.getElementById("wrapper");
const glowCursor = document.createElement("div");
glowCursor.className = "glow-cursor"
document.body.appendChild(glowCursor);

wrapper.addEventListener("mousemove", (e) => {
    glowCursor.style.left = `${e.clientX}px`;
    glowCursor.style.top = `${e.clientY}px`;
    glowCursor.style.opacity = 1;
});

wrapper.addEventListener("mouseleave", () => {
    glowCursor.style.opacity = 0;
});