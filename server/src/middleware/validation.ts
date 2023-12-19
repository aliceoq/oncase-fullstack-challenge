import { body } from "express-validator";
import {
  getParticipationTotalWhereQuery,
  getPartipationTotalQuery,
} from "../db/queries";
import { Participant } from "../models/participant";

const MAX_PARTICIPATION = 100;

const checkValue = (value: any) => {
  const numericValue = parseFloat(value);
  if (isNaN(numericValue) || numericValue < 0) {
    throw new Error("Participation must be a positive number");
  }
  if (numericValue > 100)
    throw new Error("Participation should not exceed 100%");
  return true;
};

const checkTotalParticipation = async (value: any) => {
  const sum = await getPartipationTotalQuery();
  if (parseInt(`${value}`) + sum > MAX_PARTICIPATION)
    throw new Error(
      `Participation total should not exceed ${MAX_PARTICIPATION}%`
    );
  return true;
};

const checkPartialParticipation = async (participant: Participant) => {
  const sum = await getParticipationTotalWhereQuery(participant);
  if (parseInt(`${participant.participation}`) + sum > MAX_PARTICIPATION)
    throw new Error(
      `Participation total should not exceed ${MAX_PARTICIPATION}%`
    );
  return true;
};

export const participantNameRules = [
  body("name").notEmpty().withMessage("Name is required").isAlpha(),
  body("lastname").notEmpty().withMessage("Last name is required"),
];

export const newParticipationRule = [
  body("participation")
    .isNumeric()
    .withMessage("Participation must be a number")
    .custom(checkValue)
    .custom(checkTotalParticipation),
];

export const updateParticipationRule = [
  body("participation")
    .isNumeric()
    .withMessage("Participation must be a number")
    .custom(checkValue),
  body().custom(checkPartialParticipation),
];
