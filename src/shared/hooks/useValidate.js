import { useState, useEffect } from "react";
import validate, { validateAll } from "../functions/validate";

export default function useValidate(
  fields = [],
  onPushMessage,
  isAutoValidate = false
) {
  const [validationFields, setFields] = useState(
    fields.map((field) => ({
      name: field.name,
      value: field?.value ?? "",
      module: field.module,
    }))
  );
  const [errors, setErrors] = useState(
    fields.reduce((map, obj) => {
      map[obj.name] = false;
      return map;
    }, {})
  );
  const [isValid, setValid] = useState(true);

  // Use to trigger validation
  const manuallyValidate = () => {
    const isValid = validateAll(
      validationFields.flatMap((validationField) => [
        validate(
          validationField.module,
          validationField.name,
          validationField.value,
          setErrors,
          onPushMessage
        ),
      ])
    );
    setValid(isValid);
    return isValid;
  };

  // Use isAutoValidate flag to get validation status automatically
  useEffect(() => {
    if (isAutoValidate) {
      setValid(
        validateAll(
          validationFields.forEach((validationField) =>
            validate(
              validationField.module,
              validationField.name,
              validationField.value,
              setErrors,
              onPushMessage
            )
          )
        )
      );
    }
  }, [validationFields]);

  // Set handlers for each field by name
  let handlers = {};
  fields.forEach((field) => {
    handlers[field.name] = (e) => {
      const newFields = [...validationFields];
      const targetIndex = newFields.findIndex(
        (newField) => newField.name === field.name
      );
      newFields[targetIndex] = {
        ...newFields[targetIndex],
        value: e.target.value,
      };
      setFields(newFields);
    };
  });

  const processedValidationFields = validationFields.reduce((map, obj) => {
    map[obj.name] = obj.value;
    return map;
  }, {});

  return [
    processedValidationFields,
    handlers,
    errors,
    isValid,
    manuallyValidate,
  ];
}
