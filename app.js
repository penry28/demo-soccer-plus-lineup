const GK = 'GK';
const DF = 'DF';
const MF = 'MF';
const FW = 'FW';

const lineup_343 = {
    GK: ['GK'],
    DF: ['DF', 'DF', 'DF'],
    MF: ['MF', 'MF', 'MF', 'MF'],
    FW: ['FW', 'FW', 'FW']
};

const lineup_442 = {
    GK: ['GK'],
    DF: ['DF', 'DF', 'DF', 'DF'],
    MF: ['MF', 'MF', 'MF', 'MF'],
    FW: ['FW', 'FW'],
};

const lineup_4231 = {
    GK: ['GK'],
    DF: ['DF', 'DF', 'DF', 'DF'],
    MF: ['MF', 'MF', 'MF', 'MF', 'MF'],
    FW: ['FW'],
};

const lineup_343x = {
    GK: ['GK'],
    DF: ['DF', 'DF', 'DF'],
    MF: ['MF', 'MF', 'MF', 'MF'],
    FW: ['FW', 'FW', 'FW']
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
    lineup_default.forEach((item, _) => {
        member_sorted[item] = members.filter(member => member.position === item);
    });

    let new_lineup = {};

    Object.keys(lineup).forEach((position, index) => {
        const x = member_sorted[position];
        const y = lineup[position];

        if (index === 0) {
            if (x.length === y.length) {
                new_lineup[GK] = x;
                new_lineup[DF] = member_sorted[DF];
            }
        }

        if (index === 1) {
            if (x.length > y.length) {
                const num_rm = x.length - y.length;
                const new_members_curr = x.slice(num_rm, x.length);
                const new_members_next = x.slice(0, num_rm);
                new_lineup[DF] = new_members_curr;
                new_lineup[MF] = new_members_next;
            }
            if (x.length < y.length) {
                const num_rm = y.length - x.length;
                const new_members_curr = member_sorted[MF].slice(0, num_rm);
                const new_members_next = member_sorted[MF].slice(num_rm, member_sorted[MF].length);
                new_lineup[DF] = [...x, ...new_members_curr];
                new_lineup[MF] = new_members_next;
            }
            if (x.length === y.length) {
                new_lineup[DF] = x;
                new_lineup[MF] = member_sorted[MF];
            }
        }

        if (index === 2) {
            if (x.length > y.length) {
                const num_rm = x.length - y.length;
                const new_members_curr = x.slice(num_rm, x.length);
                const new_members_next = x.slice(0, num_rm);
                new_lineup[DF] = new_members_curr;
                new_lineup[MF] = new_members_next;
            }
            if (x.length < y.length) {
                const num_rm = y.length - x.length;
                const new_members_curr = member_sorted[FW].slice(0, num_rm);
                const new_members_next = member_sorted[FW].slice(num_rm, member_sorted[FW].length);
                new_lineup[MF] = [...x, ...new_members_curr];
                new_lineup[FW] = new_members_next;
            }
            if (x.length === y.length) {
                new_lineup[MF] = x;
                new_lineup[FW] = member_sorted[FW];
            }
        }

        if (index === 3) {

        }
    });

    Object.keys({...new_lineup}).forEach(key => {
        new_lineup[key] = new_lineup[key].map(item => ({...item, position: key}));
    });

    return new_lineup;
}

console.log(lineupSelected(responses.starting, lineup_442));
