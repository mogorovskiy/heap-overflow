package com.kk.heapoverflow.repostitory;

import com.kk.heapoverflow.model.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.*;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
}
