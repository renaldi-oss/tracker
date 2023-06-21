import React from "react";

function NavBar() {
  return (
    <div className="nav">
      <h1
        className="nav-title"
      >personal jobs tracker</h1>
      <div className="add-job">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Add Job
        </button>
      </div>
    </div>
  )
}

export default NavBar;