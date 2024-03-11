package com.kk.heapoverflow.repostitory;

import com.kk.heapoverflow.model.*;
import org.springframework.data.jpa.repository.*;

import java.util.*;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
