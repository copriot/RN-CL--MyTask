const setCategory = value => {
  switch (value) {
    case 0:
      return 'Software';

    case 1:
      return 'Design';
    case 2:
      return 'Operation';
    case 3:
      return 'Home Work';
    default:
      return '';
  }
};
export {setCategory};
