import { Email } from "@/Infra/Email"
import { AppConfig, AuthConfig } from "@/Application/Config"

const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <div>
    <p>We have received a request to reset the password for your <%- website_name %> account. Please click the following link to reset your password:</p>
    <p><a href="<%- frontend_url %>/<%- frontend_reset_page %>/<%- reset_token %>" targt="_blank">Reset Password</a></p>
    <p>If you did not request to change your <%- website_name %> account password, please ignore this email.</p>
  </div>
</body>
</html>
`

/**
 *  when a user forgets their password and requests a password reset, this email
 *  is sent to them
 */
export class ForgotPasswordEmail extends Email {
  constructor(resetToken: string) {
    super("Recover Password", template, {
      frontend_url: AppConfig.frontend_url,
      frontend_reset_page: AuthConfig.frontend_reset_page,
      reset_token: resetToken,
    })
  }
}
