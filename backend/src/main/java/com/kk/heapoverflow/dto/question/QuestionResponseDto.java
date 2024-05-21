package com.kk.heapoverflow.dto.question;

import com.kk.heapoverflow.dto.user.response.UserResponseDto;

import java.time.LocalDateTime;

public record QuestionResponseDto(

        Long id,
        LocalDateTime createdAt,
        String title,
        String content,
        Long views,
        UserResponseDto author
) {}
