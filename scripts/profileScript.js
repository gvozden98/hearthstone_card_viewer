const btnOpenChangePass = document.getElementById("btnOpenChangePass");
const btnOpenDeleteAcc = document.getElementById("btnOpenDeleteAcc");
const divForm = document.getElementById("divForm");

btnOpenDeleteAcc.addEventListener("click", function () {
  let deleteDiv = document.getElementById("deleteDiv");
  let changeDiv = document.getElementById("changeDiv");
  if (typeof deleteDiv != "undefined" && deleteDiv != null) {
    deleteDiv.remove();
  }
  if (typeof changeDiv != "undefined" && changeDiv != null) {
    changeDiv.remove();
  }
  let deleteField = document.createElement("div");
  deleteField.classList = "field";
  deleteField.setAttribute("id", "deleteDiv");
  divForm.appendChild(deleteField);
  deleteField.innerHTML = `                        <label class="label" for="oldPassword">Password:</label>
  <input class="input is-danger block" type="password" placeholder="*******" name="oldPassword" required>
  <button class="button is-danger" type="submit" name="btnDeleteAcc">Delete</button>`;
});
btnOpenChangePass.addEventListener("click", function () {
  let deleteDiv = document.getElementById("deleteDiv");
  let changeDiv = document.getElementById("changeDiv");
  if (typeof deleteDiv != "undefined" && deleteDiv != null) {
    deleteDiv.remove();
  }
  if (typeof changeDiv != "undefined" && changeDiv != null) {
    changeDiv.remove();
  }
  let changePassField = document.createElement("div");
  changePassField.classList = "field";
  changePassField.setAttribute("id", "changeDiv");
  divForm.appendChild(changePassField);
  changePassField.innerHTML = `                        <label class="label" for="oldPassword">Old password:</label>
    <input class="input is-link block" type="password" placeholder="*******" name="oldPassword" required>
    <label class="label" for="newPassword">New password:</label>
    <input class="input is-link block" type="password" placeholder="*******" name="newPassword" required>
    <button class="button is-link" type="submit" name="btnChangePass">Change</button>`;
});
//brisanje notifikacije
document.addEventListener("DOMContentLoaded", () => {
  (document.querySelectorAll(".notification .delete") || []).forEach(
    ($delete) => {
      const $notification = $delete.parentNode;

      $delete.addEventListener("click", () => {
        $notification.parentNode.removeChild($notification);
      });
    }
  );
});
