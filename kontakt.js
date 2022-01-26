
// Save tasks to localStorage
const saveContact = (contact) => {
      //write to browser storage
      localStorage.setItem('contact', JSON.stringify(contact));
}

let sendenbutton = document.getElementById("sendenbutton");
sendenbutton.addEventListener("click", (e) => {
      e.preventDefault();
      let Betreff = document.getElementById("Betreff").value;
      let Name = document.getElementById("Name").value;
      let data = {
            subject: Betreff,
            name: Name,
      };

      saveContact(data);
      //add new task with push-method into JSON-object
      if (Name && Betreff) {
            window.location.href = './confirm.html';
      } else {
            alert("Bitte Ausfüllen")
      }
});
