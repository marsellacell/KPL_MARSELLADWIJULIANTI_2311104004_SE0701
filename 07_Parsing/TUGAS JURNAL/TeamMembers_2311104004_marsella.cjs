const fs = require('fs');

class TeamMembers_2311104004 {
  static readJSON() {
    fs.readFile('jurnal7_2_2311104004.json', 'utf-8', (err, data) => {
      if (err) {
        console.error('Gagal baca file JSON:', err);
        return;
      }

      const teamData = JSON.parse(data);
      console.log('Team member list:');

      teamData.members.forEach((member) => {
        console.log(`${member.nim} ${member.firstName} ${member.lastName} (${member.age} ${member.gender})`);
      });
    });
  }
}

TeamMembers_2311104004.readJSON();
