package stigrupp7.todo.controller;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import stigrupp7.todo.model.Todo;
import stigrupp7.todo.repository.TodoRepository;
import stigrupp7.todo.security.config.ApplicationConfig;
import stigrupp7.todo.security.config.JwtService;
import stigrupp7.todo.service.TodoService;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/todo/")
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

    public ApplicationConfig applicationConfig;

    @PostMapping("addNewTodo")
    public void addNewTodo(@RequestHeader("Authorization") String authorization,@RequestBody Todo todo){
        String token = authorization.substring(7);
        Long userId = JwtService.getUserIdFromToken(token);
        todo.setUser(userId);
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
