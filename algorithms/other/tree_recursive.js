const tree = [
    {
        v: 5,
        c: [
            {
                v:10,
                c: [
                    {
                        v:11,
                    }
                ]
            },
            {
                v:7,
                c: [
                    {
                        v:5,
                        c: [
                            {
                                v:1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v:10
            },
            {
                v:15
            }
        ]
    }
];

const recursive = tree => {
    let sum = 0;
    tree.forEach(node => {
         sum += node.v;
         if(!node.c) {
             return;
         }
         return sum += recursive(node.c);
     });
    return sum;
};

const iteration = tree => {
   if (!tree.length) {
       return 0;
   }
   let sum = 0;
   const stack = [];
   tree.forEach(node => {
        stack.push(node);
   });
   while (stack.length) {
       const node = stack.pop();
       sum += node.v;
       if(node.c) {
           node.c.forEach(childNode => stack.push(childNode));
       }
   }
   return sum;
};

console.log(recursive(tree));
console.log(iteration(tree));