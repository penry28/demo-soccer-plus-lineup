const lineup_343 = {
    0: ['GK'],
    1: ['DF', 'DF', 'DF'],
    2: ['MF', 'MF', 'MF', 'MF'],
    3: ['FW', 'FW', 'FW']
};

const lineup_442 = {
    0: ['GK'],
    1: ['DF', 'DF', 'DF', 'DF'],
    2: ['MF', 'MF', 'MF', 'MF'],
    3: ['FW', 'FW'],
};

const lineup_4231 = {
    0: ['GK'],
    1: ['DF', 'DF', 'DF', 'DF'],
    2: ['MF', 'MF', 'MF', 'MF', 'MF'],
    3: ['FW'],
};

const lineup_343x = {
    1: ['GK'],
    2: ['DF', 'DF', 'DF'],
    3: ['MF', 'MF', 'MF', 'MF'],
    4: ['FW', 'FW', 'FW']
};

const responses = {
    id: 1,
    title: 'Lineup Team 1',
    starting: [
        { member_id: 1, number_practice: 1, number_official: 1, position: 'GK' },

        { member_id: 2, number_practice: 2, number_official: 2, position: 'DF' },
        { member_id: 3, number_practice: 3, number_official: 3, position: 'DF' },
        { member_id: 4, number_practice: 4, number_official: 4, position: 'DF' },
        { member_id: 5, number_practice: 5, number_official: 5, position: 'DF' },

        { member_id: 6, number_practice: 6, number_official: 6, position: 'MF' },
        { member_id: 7, number_practice: 7, number_official: 7, position: 'MF' },
        { member_id: 8, number_practice: 8, number_official: 8, position: 'MF' },
        { member_id: 9, number_practice: 9, number_official: 9, position: 'MF' },

        { member_id: 10, number_practice: 10, number_official: 10, position: 'FW' },
        { member_id: 11, number_practice: 11, number_official: 11, position: 'FW' },
    ],
};

function lineupSelected(members, lineup) {
    const lineup_default = ['GK', 'DF', 'MF', 'FW'];
    let member_sorted  = {};
    lineup_default.forEach((item, index) => {
        member_sorted[index] = members.filter(member => member.position === item);
    });

    let new_lineup = {};

    Object.keys(lineup).forEach(index => {
        let x = member_sorted[index];
        let y = lineup[index];
        if (x.length > y.length) {
            const numRm = x.length - y.length;
            const neMb  = x.slice(0, x.length - numRm);
            const rmMm  = x.slice(x.length - numRm)


        } else if (x.length < y.length) {

        }
    });
    // console.log(new_lineup);
    // return [];
}

console.log(lineupSelected(responses.starting, lineup_343));
