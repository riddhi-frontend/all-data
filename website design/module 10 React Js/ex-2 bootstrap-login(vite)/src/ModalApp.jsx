import React from "react";
import { Container } from "react-bootstrap";
import { Modal } from "bootstrap";
function ModalApp()
{
    return(
      <>
        <button type="button" class="btn btn-primary m-5 p-3 fs-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Click Me
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Form</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" placeholder="Enter Your name"></input>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Sumbit</button>
      </div>
    </div>
  </div>
</div>
      </>
    )
}
export default ModalApp