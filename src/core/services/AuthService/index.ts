import {
  generateLoginToken,
  generateGeneralToken,
  validateLoginToken,
  validateGeneralToken,
} from "./helpers"

export const AuthService = {
  generateLoginAuthToken: generateLoginToken("auth"),
  validateLoginAuthToken: validateLoginToken("auth"),

  generateFirstPasswordToken: generateGeneralToken("firstPassword"),
  validateFirstPasswordToken: validateGeneralToken("firstPassword"),

  generatePasswordResetToken: generateGeneralToken("passwordReset"),
  validatePasswordResetToken: validateGeneralToken("passwordReset"),
}
