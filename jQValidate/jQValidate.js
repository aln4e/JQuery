$(function() {
  $("form[name='registration']").validate({
    rules: {
      firstName: "required",
      lastName: "required",
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      firstName: "Please enter your first name",
      lastName: "Please enter your last name",
      email: "Please enter a valid email address",
      password: {
        required: "Please enter a password",
        minlength: "Your password must be at least 6 characters"
      },
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
