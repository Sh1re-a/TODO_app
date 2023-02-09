package stigrupp7.todo.model;

import jakarta.persistence.*;
import stigrupp7.todo.security.user.User;


@Entity
@Table(name = "todo")
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String description;

    private Long user;


    public Long getUser() {
        return user;
    }

    public void setUser(Long user) {
        this.user = user;
    }



    public Todo(String description, Long user) {
        this.description = description;
        this.user = user;


    }

    public Todo() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Todo{" +
                "id=" + id +
                ", description='" + description + '\'' +
                '}';
    }
}
