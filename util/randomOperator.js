export default () => {
    const operator_col = ['+', '-', '*'];
    let randomize_operator = Math.floor(Math.random() * operator_col.length)
    return operator_col[randomize_operator];
};
