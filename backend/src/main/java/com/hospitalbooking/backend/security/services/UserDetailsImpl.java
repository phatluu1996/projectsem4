package com.hospitalbooking.backend.security.services;
import com.fasterxml.jackson.annotation.JsonIgnore;

import com.hospitalbooking.backend.constant.UserRole;
import com.hospitalbooking.backend.models.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

public class UserDetailsImpl implements UserDetails{
    private static final long serialVersionUID = 1L;

    private Long id;

    private String username;

    @JsonIgnore
    private String password;

    private Collection<? extends GrantedAuthority> authorities;

    public UserDetailsImpl(Long id, String username, String password,
                           Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.authorities = authorities;
    }

    public static UserDetailsImpl build(User user) {

        List<GrantedAuthority> authorities = new ArrayList<>();
        SimpleGrantedAuthority role;

        switch (user.getRole()){
            case UserRole.ADMIN:
                role = new SimpleGrantedAuthority("ROLE_ADMIN");
                break;

            case UserRole.DOCTOR:
                role =  new SimpleGrantedAuthority("ROLE_DOCTOR");
                break;

            case UserRole.RECEPTIONIST:
                role =  new SimpleGrantedAuthority("ROLE_RECEPTION");
                break;

            case UserRole.PATIENT:
                role =  new SimpleGrantedAuthority("ROLE_PATIENT");
                break;

            default:
                role = new SimpleGrantedAuthority("ROLE_USER");
                break;
        }

        authorities.add(role);

        return new UserDetailsImpl(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public Long getId() {
        return id;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UserDetailsImpl user = (UserDetailsImpl) o;
        return Objects.equals(id, user.id);
    }
}
