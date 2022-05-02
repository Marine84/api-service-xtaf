export function id(
  target: {} | any,
  property: PropertyKey,
  descriptor: PropertyDescriptor
) {
  console.log("target===", target);
  console.log("name===", property);
  console.log("descriptor===", descriptor.value);

  // const descriptor = {
  //     get(this: any) {
  //         const propertyName = `__${String(name)}`;
  //
  //         if (!this[propertyName]) {
  //             console.log(this[propertyName])
  //         }
  //
  //         return this[propertyName];
  //     },
  //     enumerable: true,
  //     configurable: true,
  // };

  // Object.defineProperty(target, property, descriptor);
}
