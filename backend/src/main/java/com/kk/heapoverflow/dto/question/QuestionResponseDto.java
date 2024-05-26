package com.kk.heapoverflow.dto.question;

import java.time.LocalDateTime;

public record QuestionResponseDto(

        Long id,
        LocalDateTime createdAt,
        String title,
        String content,
        Long views,
        com.kk.heapoverflow.model.User author
) {
}
