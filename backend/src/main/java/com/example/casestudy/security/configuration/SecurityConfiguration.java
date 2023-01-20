package com.example.casestudy.security.configuration;

import com.example.casestudy.security.service.ApplicationUserDetailsService;
import com.example.casestudy.shared.api.ApplicationApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity(debug = true)
public class SecurityConfiguration {
    @Bean()
    public PasswordEncoder getEncoder(){return new BCryptPasswordEncoder(); }


    @Bean
    SecurityFilterChain web(HttpSecurity http, ApplicationUserDetailsService details) throws Exception {
        http
                .authorizeHttpRequests(
                        httpReq -> httpReq
                        .requestMatchers(ApplicationApi.PERMIT_ALL_ROUTES+"/**")
                        .permitAll()
                                .requestMatchers("/h2-console")
                                .permitAll()
                        .requestMatchers(ApplicationApi.AUTH_ROUTES+"/**")
                        .authenticated()
                                .anyRequest().denyAll()
                )
                .csrf().disable()
                .cors().disable();
        return http.build();
    }


}
