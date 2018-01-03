function TODO(text) {
    this.id = TODO.prototype.nextId++;
    this.text = text;
    this.completed = false;
}
TODO.prototype.nextId = 1;

function TODOList() {
    this._todos = [];
}

TODOList.prototype.addTodo = function (text) {
    var todo = new TODO(text);
    this._todos.push(todo);
    return todo.id;
}

TODOList.prototype.removeTodo = function (id) {
    var index = this._todos.findIndex(todo => todo.id === id);
    if (index != -1) {
        this._todos.splice(index, 1);
    }
}

TODOList.prototype.toggleStatus = function (id) {
    var todo = this._todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
    }
}

TODOList.prototype.removeCompleted = function () {
    this._todos = this._todos.filter(todo => !todo.completed);
}

var todoList = new TODOList();