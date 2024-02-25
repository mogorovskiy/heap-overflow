package com.kk.heapoverflow.repostitory;

import com.kk.heapoverflow.model.*;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
