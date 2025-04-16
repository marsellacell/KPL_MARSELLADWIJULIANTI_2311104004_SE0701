document.addEventListener('DOMContentLoaded', () => {
    fetch('jurnal7_2_<2311104004_marsella>.json')
        .then(response => response.json())
        .then(data => {
            const teamMembersDiv = document.getElementById('team-members');
            let htmlContent = '<ul>';
            data.forEach(member => {
                htmlContent += `<li>${member.NIM} ${member.FirstName} ${member.LastName} (${member.Age} ${member.Gender})</li>`;
            });
            htmlContent += '</ul>';
            teamMembersDiv.innerHTML = htmlContent;
        })
        .catch(error => console.error('Error:', error));
});
