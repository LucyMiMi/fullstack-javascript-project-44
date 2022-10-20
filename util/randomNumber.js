//export default () => Math.floor(Math.random() * 20);
export default (min, max) => Math.floor(min + Math.random() * (max + 1 - min));