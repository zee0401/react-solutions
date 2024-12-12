import produce from "immer";

const obj = {
  obj1: {
    obj2: {
      a: 5,
    },
  },
};

// const obj10 = {
//   ...obj,
//   obj1: {
//     ...obj.obj1,
//     obj2: {
//       ...obj.obj1.obj2,
//       a: 6,
//     },
//   },
// };

const obj10 = produce(obj, (draft) => {
  draft.obj1.obj2.a = 6;
  draft.obj1.addingValue = "newValue";
});

console.log("Original Object:", obj);
console.log("New Object:", obj10);
