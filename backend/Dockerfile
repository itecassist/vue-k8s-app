# Use an official JDK base image
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy built JAR (will do build step later)
COPY target/backend-*.jar app.jar

# Run the app
ENTRYPOINT ["java", "-jar", "app.jar"]