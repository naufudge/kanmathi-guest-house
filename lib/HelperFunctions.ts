export function getObjectKeyValues(object: Object) {
    const keys = Object.keys(object)
    const values = Object.values(object)
    const results = []
    for (let key in keys) {
        results.push((keys[key], values[key]))
    }
    console.log(results)
    return results
}