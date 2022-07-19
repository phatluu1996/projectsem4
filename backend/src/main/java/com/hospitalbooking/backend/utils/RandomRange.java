package com.hospitalbooking.backend.utils;

public class RandomRange {
    public static int range(int min, int max) {
        return (int) ((Math.random() * (max - min)) + min);
    }
}
