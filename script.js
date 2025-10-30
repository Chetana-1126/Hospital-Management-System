// Responsive Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.querySelector("ul").classList.toggle("active");
});

// Appointment Form Handler
const appointmentForm = document.getElementById("appointmentForm");
if (appointmentForm) {
  appointmentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const appointmentData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      department: document.getElementById("department").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
    };

    // In future: Send this to MongoDB backend using fetch()
    console.log("Appointment Submitted:", appointmentData);
    alert(`Appointment booked for ${appointmentData.name} in ${appointmentData.department} department.`);
    appointmentForm.reset();
  });
}
