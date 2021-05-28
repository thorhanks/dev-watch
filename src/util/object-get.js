// Gets the value at path of object.
// Note: If provided path does not exists inside the object js will generate error.
// Example:
//   var object = { a: [{ b: { c: 3 } }] };
//   var result = objectGet(object, 'a[0].b.c', 1);
//   output: 3
export default function (obj, path, defaultValue = undefined) {
    const travel = (regexp) =>
        String.prototype.split
            .call(path, regexp)
            .filter(Boolean)
            .reduce(
                (res, key) =>
                    res !== null && res !== undefined ? res[key] : res,
                obj
            );
    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result === undefined || result === obj ? defaultValue : result;
}
