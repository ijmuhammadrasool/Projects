function count(date1, date2) {

    let years = date2.getFullYear() - date1.getFullYear();
    let months = date2.getMonth() - date1.getMonth();
    let days = date2.getDate() - date1.getDate();

    // Adjust months and years if days are negative
    if (days < 0) {
        months--;
        const lastMonth = new Date(date2.getFullYear(), date2.getMonth(), 0);
        days += lastMonth.getDate(); // Add the days from the last month
    }

    if (months < 0) {
        years--;
        months += 12; // Adjust months to be positive
    }

    return { years, months, days };
}

const startDate = new Date('2024-09-26');
const endDate = new Date();
const countDate = count(startDate, endDate);

// Define options for toLocaleDateString
const options = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' };

// Format the date
const formattedDate = endDate.toLocaleDateString('en-US', options);

document.getElementById("count").innerHTML = (`&copy; 26-09-2024 Developed By Muhammad Rasool. All Rights Reserved. Present: ${formattedDate}.<p class = "count"> Developed Passed ${countDate.months} Months ${countDate.days} Days.</P>`);

//Orginal code
// document.getElementById("demo1").innerHTML = (`Difference: ${detailedDiff.years} years, ${detailedDiff.months} months, ${detailedDiff.days} days`);


