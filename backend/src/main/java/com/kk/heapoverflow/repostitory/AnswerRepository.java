package com.kk.heapoverflow.repostitory;

import com.kk.heapoverflow.model.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
