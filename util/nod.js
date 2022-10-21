const nod = (num_first, num_two) => {
    if (num_two !== 0) {
      const num_temp = num_first % num_two;
      return nod(num_two, num_temp);
    }
    return num_first;
};  
  