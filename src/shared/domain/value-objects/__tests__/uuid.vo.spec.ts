import { InvalidUuidError, Uuid } from "../uuid.vo"
import { validate as uuidValidate } from "uuid"

describe("Uuid Unit Tests", () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any, "validate")

  test("should throw error when uuid is invalid", () => {
    expect(() => {
      new Uuid('invalid-uuid')
    }).toThrow(new InvalidUuidError())
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })

  test("should create a valid uuid", () => {
    const uuid = new Uuid()
    expect(uuid.id).toBeDefined()
    expect(uuidValidate(uuid.id)).toBe(true)
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })

  test("should accept a valid uuid", () => {
    const uuidValid = "85d26ed9-7c16-47bb-a837-e1854d999234"

    const uuid = new Uuid(uuidValid)
    expect(uuid.id).toBe(uuidValid)
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })
})