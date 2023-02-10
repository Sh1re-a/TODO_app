package stigrupp7.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stigrupp7.todo.model.Todo;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo,Long> {

    List<Todo> findByUser(Long user);
}
