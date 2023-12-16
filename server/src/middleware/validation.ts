import { body } from "express-validator";

export const participantValidationRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("lastname").notEmpty().withMessage("Last name is required"),
  body("participation")
    .isNumeric()
    .withMessage("Participation must be a number")
    .custom((value) => {
      const numericValue = parseFloat(value);
      if (isNaN(numericValue) || numericValue < 0) {
        throw new Error("Participation must be a positive number");
      }
      return true;
    }),
];

export const deleteParticipantRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("lastname").notEmpty().withMessage("Last name is required"),
];
