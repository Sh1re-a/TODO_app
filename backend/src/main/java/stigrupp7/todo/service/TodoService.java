package stigrupp7.todo.service;

import jakarta.transaction.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import stigrupp7.todo.model.Todo;
import stigrupp7.todo.repository.TodoRepository;


import java.util.List;
import java.util.Objects;

@Service
public class TodoService {

    private static final Logger LOGGER = LoggerFactory.getLogger(TodoService.class);

    private final TodoRepository todoRepository;

    @Autowired
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> getAllTodos() {
        LOGGER.info("getAllTodos was called");
        return todoRepository.findAll();
    }

    public void addNewTodo(Todo todo) {
        LOGGER.info("new todo was added");
        todoRepository.save(todo);
    }


    public void deleteTodo(Long todoId) {
        LOGGER.info("todo was deleted");
        todoRepository.deleteById(todoId);
    }

    @Transactional
    public void updateTodo(Long todoId, String description) {
        LOGGER.info("todo was updated");
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
