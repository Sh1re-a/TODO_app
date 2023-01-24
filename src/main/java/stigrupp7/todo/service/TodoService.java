package stigrupp7.todo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import stigrupp7.todo.model.Todo;
import stigrupp7.todo.repository.TodoRepository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    @Autowired
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public void addNewTodo(Todo todo) {
        todoRepository.save(todo);
    }


    public void deleteTodo(Long todoId) {
        todoRepository.deleteById(todoId);
    }

    @Transactional
    public void updateTodo(Long todoId, String description) {
        Todo todo = todoRepository.findById(todoId)
                .orElseThrow(
                        () -> new IllegalStateException(
                                "todo with id " + todoId + "does not exist"));
        if (description != null && description.length() > 0 &&
        !Objects.equals(todo.getDescription(), description)){
            todo.setDescription(description);
        }
    }
}
