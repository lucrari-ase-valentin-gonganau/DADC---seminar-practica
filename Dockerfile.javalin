FROM critoma/amd64_u24_noble_ism_security:latest

ENV JAVA_HOME=/opt/software/java/jdks/jdk-25.0.1
ENV NODE_HOME=/opt/software/nodejs/node-v22.21.0-linux-x64
ENV CATALINA_HOME=/opt/software/apache-tomcat-11.0.0
ENV PATH="$JAVA_HOME/bin:$CATALINA_HOME/bin:$NODE_HOME/bin:$PATH"

USER stud
WORKDIR /home/stud/app

COPY --chown=stud:stud apps/Javalin/. .

# Compile Java application
RUN mkdir -p target/classes && \
    javac -cp "target/dependency/*" -d target/classes src/main/java/eu/App.java

EXPOSE 8081


CMD ["java", "-cp", "target/classes:target/dependency/*", "eu.App"]