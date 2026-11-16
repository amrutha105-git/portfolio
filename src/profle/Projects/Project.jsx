import React from 'react'
import "./Project.css"

const Project = () => {
  return (
    <div className="projects" id="projects">

      <h1>My Projects</h1>

      <div className="project-list">

        <div className="project-card">
          <h2>E-Commerce Application</h2>

          <p>
            Developed an E-Commerce application using
            Java, Spring Boot, React and MySQL.
            It includes User, Product and Order services
            using Microservices architecture.
          </p>

          <h4>Technologies: Java, Spring Boot, React, MySQL</h4>
        </div>

        <div className="project-card">
          <h2>Campus Marketplace</h2>

          <p>
            Developed a web application where students
            can register, log in, view products and
            manage orders. Implemented CRUD operations
            using Java and MySQL.
          </p>

          <h4>Technologies: Java, JDBC, Servlets, JSP, MySQL</h4>
        </div>

      </div>

    </div>
  )
}

export default Project
