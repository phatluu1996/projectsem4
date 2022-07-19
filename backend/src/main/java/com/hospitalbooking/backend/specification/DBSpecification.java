package com.hospitalbooking.backend.specification;

import org.springframework.data.jpa.domain.Specification;

import javax.swing.text.html.parser.Entity;

public class DBSpecification {
    public static Specification<Entity> createSpecification(Boolean retired){
        return Specification.where(isRetired(retired));
    }

    public static Specification<Entity> isRetired(Boolean retired) {
        return (root, cq, cb) -> retired != null ? cb.equal(root.get("retired"), retired) : null;
    }
}
