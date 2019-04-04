export const generateEmail = (email) => {
    const nouns = ["angela", "andrew", "olivia", "gaji", "mandoo"];
    const verbs = ["farts", "poops", "pees"];
    email.senderEmail = "no-reply@accounts.google.com";
    email.body = `The password for your Google account ${pickRandomFromArr(nouns)}${pickRandomFromArr(verbs)}247@gmail.com was changed. If you didn't change it, you should recover your account.`
    return email;
};

const pickRandomFromArr = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};