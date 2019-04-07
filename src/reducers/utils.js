export const generateEmail = (email) => {
    const nouns = ["angela", "gaji", "mandoo"];
    const verbs = ["smiles", "dances", "laughs"];
    email.senderEmail = "no-reply@accounts.google.com";
    email.body = `The password for your Google account ${pickRandomFromArr(nouns)}${pickRandomFromArr(verbs)}247@gmail.com was changed. If you didn't change it, you should recover your account.`
    return email;
};

export const generateId = (state) => {
    const { emails, deleted } = state;
    const lastId = Object.keys(emails)[Object.keys(emails).length-1]
    let newId = lastId + 1;
    while (!uniqueIdGenerated(newId, emails, deleted)) {
        newId += 1;
    }
    return newId;
};

const uniqueIdGenerated = (id, ...fields) => {
    fields.forEach((field) => {
        if (field[id]) {
            return false;
        }
    }) 
    return true;
};

const pickRandomFromArr = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};