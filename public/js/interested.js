const interested = async (event) => {
  event.preventDefault();
  const button = event.target;
  const response = await fetch(
    `/api/posts/${button.dataset.postId}/interested`,
    {
      method: "POST",
    }
  );

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
};

document.querySelectorAll(".interested-btn").forEach((button) => {
  button.addEventListener("click", interested);
});
