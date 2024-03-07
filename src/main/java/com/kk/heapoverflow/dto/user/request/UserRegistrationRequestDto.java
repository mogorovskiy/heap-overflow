package com.kk.heapoverflow.dto.user.request;

import jakarta.validation.constraints.*;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserRegistrationRequestDto {
    @Email
    private String email;

    @NotBlank
    @Size(min = 3, max = 255, message = "Password should be at least 3 symbols length")
    private String password;

    @NotBlank
    @Size(min = 3, max = 255)
    private String repeatPassword;

    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    private String profilePhotoUrl;
}
