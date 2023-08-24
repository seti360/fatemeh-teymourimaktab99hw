function setterGenerator(obj, property) {
  return function(value) {
    obj[property] = value;
    return obj;
  };
};
let user = {};
let nameSetter = setterGenerator(user, 'name');
nameSetter('Jack');
console.log(user);
  