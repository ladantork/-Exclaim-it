function testStartsWithExclamationMarks(str) {
    const regex = /^!/;
    return regex.test(str);
}