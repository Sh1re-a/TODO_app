package stigrupp7.todo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import stigrupp7.todo.model.Todo;
import stigrupp7.todo.service.TodoService;

import java.util.List;

@RestController
@RequestMapping("/api/todo")
public class TodoController {

    private final TodoService todoService;

    @Autowired
    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public List<Todo> getAllTodos(){
        return todoService.getAllTodos();
    }

    @PostMapping
    public void addNewTodo(@RequestBody Todo todo){
        todoService.addNewTodo(todo);
    }

    @DeleteMapping(path = "{todoId}")
    public void deleteTodo(@PathVariable("todoId") Long todoId){
        todoService.deleteTodo(todoId);
    }

    @PutMapping(path = "{todoId}")
    public void updateTodo(
            @PathVariable("todoId") Long todoId,
            @RequestParam(required = false) String description){
        todoService.updateTodo(todoId, description);
    }
}
