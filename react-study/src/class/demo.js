 const emit = {
    list: [],
    subscribe(callback) {
        this.list.push(callback)
    },
    publish(param) {
        this.list.forEach(val => val(param))
    }
}
export default emit