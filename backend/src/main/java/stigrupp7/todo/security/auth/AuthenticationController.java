package stigrupp7.todo.security.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

  private final AuthenticationService service;

  @PostMapping("/register")
  public ResponseEntity<AuthenticationResponse> register(
      @RequestBody RegisterRequest request
  ) {
    try {
      return new ResponseEntity<>(service.register(request), HttpStatus.OK);
    }
    catch (Exception e) {
      return new ResponseEntity<>(service.register(request), HttpStatus.BAD_REQUEST);
    }
  }
  @PostMapping("/authenticate")
  public ResponseEntity<AuthenticationResponse> authenticate(
      @RequestBody AuthenticationRequest request
  ) {
    try {
      return new ResponseEntity<>(service.authenticate(request),HttpStatus.OK);
    }
    catch (Exception e) {
      return new ResponseEntity<>(service.authenticate(request),HttpStatus.BAD_REQUEST);
    }

  }


}