package com.kk.heapoverflow.dto.user;

import jakarta.validation.constraints.NotBlank;

public record UserUpdateRequestDto(
        @NotBlank String userId,
        String firstName,
        String lastName
) {}