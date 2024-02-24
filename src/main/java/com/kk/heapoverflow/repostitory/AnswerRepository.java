package com.kk.heapoverflow.repostitory;

import com.kk.heapoverflow.model.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.*;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
