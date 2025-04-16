document.addEventListener('DOMContentLoaded', () => {
    fetch('path_to_your_json_file')
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
