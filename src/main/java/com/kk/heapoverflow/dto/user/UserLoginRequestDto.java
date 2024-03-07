package com.kk.heapoverflow.dto.user;

import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserLoginRequestDto {

    private String email;

    @Size(min = 3, max = 255, message = "Password should be at least 3 symbols length")
    private String password;
}