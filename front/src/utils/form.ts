import { UseMutationResult } from "@tanstack/react-query";
import { Participant } from "../types";
import { FormEvent } from "react";
import { toast } from "react-toastify";

export const validateForm = (participant: Participant) => {
  const { name, lastname, participation } = participant;
  if (!name || !lastname || !participation) {
    return { isValid: false, message: "All fields are required" };
  }

  const nameRegex = /^[a-zA-Z]+$/;

  if (!nameRegex.test(name) || !nameRegex.test(lastname)) {
    return {
      isValid: false,
      message: "Name and lastname can only contain letters",
    };
  }

  if (name.length > 50 || lastname.length > 50) {
    return {
      isValid: false,
      message: "Name and lastname can be at most 50 characters",
    };
  }

  if (isNaN(participation)) {
    return { isValid: false, message: "Participation must be a number" };
  }

  return { isValid: true, message: "Form is valid" };
};

const getFormData = (event: FormEvent<HTMLFormElement>) => {
  const formData: Participant = {
    name: event.currentTarget.firstname.value,
    lastname: event.currentTarget.lastname.value,
    participation: event.currentTarget.participation.value,
  };

  return formData;
};

export const handleSubmit = async (
  event: FormEvent<HTMLFormElement>,
  mutation: UseMutationResult<Participant, Error, Participant, unknown>
) => {
  event.preventDefault();
  const formData = getFormData(event);
  const { isValid, message } = validateForm(formData);

  if (!isValid) {
    toast.error(message);
    return;
  }

  mutation.mutate(formData);
  event.currentTarget.reset();
};
