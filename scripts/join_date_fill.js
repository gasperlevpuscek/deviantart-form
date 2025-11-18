// Fill Month
const monthSelect = document.getElementById("birth_month");
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index + 1;   // 1–12
    option.textContent = month;
    monthSelect.appendChild(option);
});

// Fill Day
const daySelect = document.getElementById("birth_day");
for (let day = 1; day <= 31; day++) {
    const option = document.createElement("option");
    option.value = day;
    option.textContent = day;
    daySelect.appendChild(option);
}

// Fill Year
const yearSelect = document.getElementById("birth_year");
const currentYear = new Date().getFullYear();

for (let year = currentYear; year >= 1900; year--) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
}
