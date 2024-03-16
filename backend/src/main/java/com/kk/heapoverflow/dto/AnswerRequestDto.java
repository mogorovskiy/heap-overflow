package com.kk.heapoverflow.dto;

import com.kk.heapoverflow.model.*;
import lombok.*;

@Data
public class AnswerRequestDto {
    private String content;
    private User user;
    private Question question;
}
