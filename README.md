# Java-React

#Comando para correr Frontend:
  Dentro de la carpeta Frontend:
    Ingrese los siguientes comandos dentro de la terminal
      npm install
      npm run dev

#Comando para correr Backend:
 Dentro de la carpeta Backend:
    Ingrese los siguientes comandos dentro de la terminal
      mvn spring-boot:run
    Dentro de la carpeta application.properties:
      configure la base de datos, se esta usando mysql a su conveniencia
      
  spring.datasource.url=jdbc:mysql://localhost/users
  spring.datasource.username=root
  spring.datasource.password=
  spring.jpa.hibernate.ddl-auto=update
  
  spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL8Dialect
  spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver


    
