document.addEventListener('DOMContentLoaded', function () {
    const ENTER_KEY = 13;
    var container = document.querySelector('ul');

    document.querySelector('input').addEventListener('keypress', function (event) {
        if (event.keyCode === ENTER_KEY) {
            var id = todoList.addTodo(this.value);
            var li = document.createElement('li');
            li.setAttribute('id', id);
            li.innerHTML = '<input type="checkbox"/> <span class="todo">' + this.value + '</span> <span class="delete">&times;</span>'
            container.appendChild(li);
            this.value = '';

            var deleteButton = document.querySelector('ul > li:last-of-type > span.delete');
            deleteButton.addEventListener('click', function () {
                var theFather = this.parentNode;
                todoList.removeTodo(theFather.id);
                theFather.parentNode.removeChild(theFather);
            });
            var checkbox = document.querySelector('ul > li:last-of-type > input[type=checkbox]');
            checkbox.addEventListener('click', function (event) {
                var theFather = this.parentNode;
                todoList.toggleStatus(theFather.id);
                if (this.checked) {
                    theFather.children[1].style.textDecoration = 'line-through';
                } else {
                    theFather.children[1].style.textDecoration = 'none';
                }
            });


        }
    });
    document.getElementById('delete_all').addEventListener('click', function () {
        todoList.removeCompleted();
        var allInputs = document.querySelectorAll('ul > li > input');
        Array.prototype.forEach.call(allInputs, function (input) {
            if (input.checked) {
                var theFather = input.parentNode;
                theFather.parentNode.removeChild(theFather);
            }
        });
    });
});