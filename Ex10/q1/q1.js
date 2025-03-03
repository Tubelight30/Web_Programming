    // Patient Data
    const patients = [
        { P_Id: 1, Name: "Alen", Age: 39 },
        { P_Id: 2, Name: "Deena", Age: 47 },
        { P_Id: 3, Name: "Diana", Age: 21 },
        { P_Id: 4, Name: "Jack", Age: 54 },
        { P_Id: 5, Name: "Jain", Age: 23 },
        { P_Id: 6, Name: "Kelvin", Age: 61 },
        { P_Id: 7, Name: "Louis", Age: 69 },
        { P_Id: 8, Name: "Rex", Age: 49 }
    ];

    // (i) Sort patients in descending order by age
    function sortByAgeDesc(patients) {
        return patients.sort((a, b) => b.Age - a.Age);
    }

    // (ii) Check if a P-Id exists in the list
    function isPatientPresent(patients, id) {
        return patients.some(patient => patient.P_Id === id);
    }

    // (iii) Filter patients within an age range
    function filterByAgeRange(patients, minAge, maxAge) {
        return patients.filter(patient => patient.Age >= minAge && patient.Age <= maxAge);
    }

    // Testing the functions
    console.log("Sorted Patients by Age (Descending):");
    console.log(sortByAgeDesc([...patients])); // Copy to avoid modifying original array

    console.log("\nIs P-Id 4 present?", isPatientPresent(patients, 4));
    console.log("Is P-Id 10 present?", isPatientPresent(patients, 10));

    console.log("\nPatients aged between 40 and 60:");
    console.log(filterByAgeRange(patients, 40, 60));
