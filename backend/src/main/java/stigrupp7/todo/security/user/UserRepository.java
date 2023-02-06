package stigrupp7.todo.security.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import stigrupp7.todo.security.user.User;

public interface UserRepository extends JpaRepository<User, Integer> {

  Optional<User> findByEmail(String email);

}
