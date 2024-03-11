package com.kk.heapoverflow.dto;

import com.kk.heapoverflow.model.*;
import lombok.*;

@Data
public class QuestionRequestDto {
    private String title;
    private String content;
    private Long views;
    private User user;
}
