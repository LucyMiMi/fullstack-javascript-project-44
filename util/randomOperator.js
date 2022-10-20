export default () => {
    const operator_list = ['+', '-', '*'];
    let random_operator = Math.floor(Math.random() * operator_list.length)
    return operator_list[random_operator];
};