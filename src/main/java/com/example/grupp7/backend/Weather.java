package com.example.grupp7.backend;

import jakarta.persistence.*;

@Entity
@Table
public class Weather {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private float weather;

    @Column(nullable = false)
    private float temperature;
    @Column(nullable = false)
    private float humidity;
    @Column(nullable = false)
    private float windSpeed;
    @Column(nullable = false)
    private String condition;

    @Column(nullable = false)
    private String city;

    public Weather() {
    }

    public Weather(float temperature, float humidity, float windSpeed, String condition, float weather, String city) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.condition = condition;
        this.weather = weather;
        this.city = city;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public float getWeather() {
        return weather;
    }

    public void setWeather(float weather) {
        this.weather = weather;
    }

    public float getTemperature() {
        return temperature;
    }

    public void setTemperature(float temperature) {
        this.temperature = temperature;
    }

    public float getHumidity() {
        return humidity;
    }

    public void setHumidity(float humidity) {
        this.humidity = humidity;
    }

    public float getWindSpeed() {
        return windSpeed;
    }

    public void setWindSpeed(float windSpeed) {
        this.windSpeed = windSpeed;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Override
    public String toString() {
        return "Weather{" +
                "id=" + id +
                ", weather=" + weather +
                ", temperature=" + temperature +
                ", humidity=" + humidity +
                ", windSpeed=" + windSpeed +
                ", condition='" + condition + '\'' +
                ", city='" + city + '\'' +
                '}';
    }
}
