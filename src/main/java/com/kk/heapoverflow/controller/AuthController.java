package com.kk.heapoverflow.controller;

import com.kk.heapoverflow.dto.auth.*;
import com.kk.heapoverflow.dto.user.request.*;
import com.kk.heapoverflow.dto.user.response.*;
import com.kk.heapoverflow.model.*;
import com.kk.heapoverflow.security.*;
import com.kk.heapoverflow.service.*;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public UserResponseDto register(@Valid @RequestBody UserRegistrationRequestDto request) {
        return userService.register(request);
    }

    @PostMapping("/login")
    public JwtAuthenticationResponse login(@Valid @RequestBody UserLoginRequestDto request) {
        return authenticationService.authenticate(request);
    }
}
