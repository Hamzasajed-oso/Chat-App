import { describe, it, expect, afterAll } from "vitest"
import { Server } from "@/core/server"
import { db } from "@/core/database"
import { Auth } from "@/core/helpers"
import { ValidatePasswordResetToken } from "@/app/modules/forgotPassword/forgotPassword.schema"
import { UserFactory } from "@/app/modules/user/userFactory"

describe("validatePasswordResetToken", () => {
  const server = Server.new()
  const url = "/api/forgot-password/validate-reset-token"
  const method = "POST"

  afterAll(() => server.close())

  it("valid request", async () => {
    /** setup */
    const user = await db.user.create({
      data: UserFactory.make(),
    })
    const resetToken = await Auth.generatePasswordResetToken(user.id)

    /** test */
    const res = await server.inject({
      url,
      method,
      payload: {
        token: resetToken.token,
      } as ValidatePasswordResetToken,
    })
    expect(res.statusCode).toBe(200)

    const body = JSON.parse(res.body)
    expect(body.isValid).toBe(true)

    /** cleanup */
    await db.user.delete({ where: { id: user.id } })
  })
})
