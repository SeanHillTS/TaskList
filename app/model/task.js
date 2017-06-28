"use strict";
var Task = (function () {
    function Task(content, completed) {
        this.content = content;
        this.completed = completed;
        this.deleted = false;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map