package com.hospitalbooking.backend.specification;

import org.springframework.data.jpa.domain.Specification;

public class DBSpecification {
    public static Specification<?> createSpecification(Boolean retired){
        return Specification.where(isRetired(retired));
    }

    public static Specification<?> isRetired(Boolean retired) {
        return (root, cq, cb) -> retired != null ? cb.equal(root.get("retired"), retired) : null;
    }
}
