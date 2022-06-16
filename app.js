const GK = 'GK';
const DF = 'DF';
const MF = 'MF';
const FW = 'FW';

const lineup_343 = {
    1: ['GK'],
    2: ['DF', 'DF', 'DF'],
    3: ['MF', 'MF', 'MF', 'MF'],
    4: ['FW', 'FW', 'FW']
};

const lineup_442 = {
    1: ['GK'],
    2: ['DF', 'DF', 'DF', 'DF'],
    3: ['MF', 'MF', 'MF', 'MF'],
    4: ['FW', 'FW'],
};

const lineup_4231 = {
    1: ['GK'],
    2: ['DF', 'DF', 'DF', 'DF'],
    3: ['MF', 'MF', 'MF', 'MF', 'MF'],
    4: ['FW'],
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
        member_sorted[index + 1] = members.filter(member => member.position === item);
    });

    let x = member_sorted;
    let y = lineup;

    function defineData(list, position) {
        if (list[position].length === y[position].length) {
            return list;
        }

        if (list[position].length > y[position].length) {
            const num_rm = list[position].length - y[position].length;
            const new_members_curr = list[position].slice(0, list[position].length - num_rm);
            const new_members_next = list[position].slice(-num_rm);
            list[position] = new_members_curr;
            list[position+1] = [...new_members_next, ...list[position+1]];
            return list;
        }

        if (list[position].length < y[position].length) {
            const num_rm = y[position].length - list[position].length;
            const new_members_curr = list[position + 1].slice(0, num_rm);
            const new_members_next = list[position + 1].slice(num_rm, list[position + 1].length);
            list[position] = [...list[position], ...new_members_curr];
            list[position + 1] = new_members_next;
            return list;
        }
    }

    let data = defineData(x, 1);
    data = defineData(data, 2);
    data = defineData(data, 3);
    data = defineData(data, 4);
    data[GK] = data[1]; delete data[1];
    data[DF] = data[2]; delete data[2];
    data[MF] = data[3]; delete data[3];
    data[FW] = data[4]; delete data[4];

    Object.keys({...data}).forEach(key => {
        data[key] = data[key].map(item => ({...item, position: key}));
    });
    return data;
}
const data = lineupSelected(responses.starting, lineup_4231);
console.log(data);